"use client";
import { useState } from "react";
import { ObjectDrag } from "@/components/cartas/objectdrag";
import { BGDrop } from "@/components/cartas/bgdrop";
import { DragDropProvider } from "@dnd-kit/react";



export default function LetterEditor() {
  
  
  return (
    <main className="h-screen p-4 bg-background flex flex-col">

        <h1 className="">
            Empieza a editar tu tarjeta
        </h1>

        <div className="dnd-layout">
            <DragDropProvider>
                <ObjectDrag id={1} />
                <BGDrop id={4} />
            </DragDropProvider>
        </div>

        
     
    </main>
  );
}
