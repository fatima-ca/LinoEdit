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
