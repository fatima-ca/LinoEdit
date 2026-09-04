"use client";
import { useState } from "react";

import Subirimagen from "@/components/botones/Subirimagen";
import Tablero from "@/components/edicion/Tablero";
import { useImageEditor } from "@/hooks/useImageEditor";

export default function Editor() {
  const {
    imageFile,
    imageUrl,
    isProcessing,
    handleFileChange,
    aplicarFiltro
  } = useImageEditor();
  
  
  return (
    <main className="h-screen p-4 flex flex-col">

      <h1 className="text-amber-300">
        Empieza a editar tu imagen
      </h1>

      <div className="grid grid-cols-5 gap-10">

        <div className="col-start-2 col-span-2">  
            <Tablero 
              haveImage={!!imageFile} 
              imageUrl={imageUrl} 
              imageName={imageFile?.name}
              onAplicarFiltro={aplicarFiltro} 
              isProcessing={isProcessing}/>
        </div>  

       
          <Subirimagen onFileChange={handleFileChange}/>
      
      </div>

    </main>
  );
}
