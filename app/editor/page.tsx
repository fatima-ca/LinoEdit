"use client";
import { useState } from "react";

import Subirimagen from "@/components/botones/Subirimagen";
import Tablero from "@/components/edicion/Tablero";

export default function Editor() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleFileChange = (file: File | null) => {
    setImageFile(file);
    
    // Si hay un archivo anterior, liberamos su memoria
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
      setImageUrl("");
    }

    // Si se subió un nuevo archivo, generamos su URL temporal
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const aplicarFiltro = async (tipoFiltro: string) => {
    if (!imageFile) return;

    setIsProcessing(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("filtro", tipoFiltro);

    try {
      const respuesta = await fetch("http://127.0.0.1:8000/filters/apply", {
        method: "POST",
        body: formData,
      });

      if (!respuesta.ok) throw new Error("Error en el servidor al aplicar filtro");

      const blob = await respuesta.blob();
      
      
      if (imageUrl) URL.revokeObjectURL(imageUrl);
      
      const nuevaUrl = URL.createObjectURL(blob);
      setImageUrl(nuevaUrl);
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <main className="h-screen p-4 bg-background flex flex-col">

      <h1 className="">
        Empieza a editar tu imagen
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

        <div className="md:col-start-2 md:col-span-3 border border-linocolor-2 p-4 rounded-linoradius flex items-center justify-center min-h-170">
            <Tablero 
              haveImage={!!imageFile} 
              titleImage={imageUrl} 
              onAplicarFiltro={aplicarFiltro} 
              isProcessing={isProcessing}/>
        </div>

        <div className="md:col-span-1 border border-linocolor-2 p-4 rounded-linoradius">
          <Subirimagen onFileChange={handleFileChange}/>
        </div>
      </div>

    </main>
  );
}
