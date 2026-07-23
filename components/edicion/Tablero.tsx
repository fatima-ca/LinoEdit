"use client";
import { useState } from "react";
import React from "react";

interface TableroProps {
  haveImage: boolean;
  titleImage?: string;
  onAplicarFiltro: (tipoFiltro: string) => Promise<void>;
  isProcessing?: boolean;
}

const FILTROS_DISPONIBLES = [
  { id: "gris", label: "Escala de Grises" },
  { id: "blur", label: "Desenfoque" },
  { id: "edges", label: "Bordes (Canny)" },
];



export default function Tablero({ haveImage, titleImage, onAplicarFiltro, isProcessing = false }: TableroProps) {
    const [text, setText] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return(
        <section className="w-full h-full flex flex-col gap-4">
            {/* Contenido del tablero */}

            <div className="flex-1 w-full border border-linocolor-2 bg-lino-orange rounded-linoradius">
            {!haveImage ? (
                <div className="justify-center ">
                {/* Pantalla para visualizar la imagen cargada */}

                    <p>Sube una imagen</p>
                
                </div>
            ) : (
                <div className="flex-1 w-full border border-linocolor-2 bg-lino-orange rounded-linoradius gap-4">
                {/* Pantalla para visualizar la imagen cargada */}

                    <img src={titleImage} alt="Preview" className="rounded-linoradius object-contain"/>

                    <div>
                        <p className="text-sm font-medium mb-1">File name:</p>
                        <input 
                            className="bg-white border border-linocolor-2 rounded px-2 py-1 w-full text-black" 
                            type="text" 
                            value={text} 
                            onChange={handleChange} 
                            placeholder="Enter file name"
                        />
                        
                    </div>

                    <a className=
                            {`text-center py-2 px-4 rounded font-medium transition-colors ${
                                text.trim()
                                ? "bg-lino-red text-white cursor-pointer hover:bg-lino-red/80"
                                : "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
                            }`}
                            href={text.trim() ? titleImage : undefined}
                            download={`${text}.png`}
                            onClick={(e) => !text.trim() && e.preventDefault()}
                    >
                        Download
                    </a>
                </div>
            )}</div>

            <div className="w-full flex flex-row gap-2 py-2">
                {FILTROS_DISPONIBLES.map((filtro) => (
                    <BotonFiltro
                        key={filtro.id}
                        label={filtro.label}
                        onClick={() => onAplicarFiltro(filtro.id)}
                        disabled={!haveImage || isProcessing}
                    />
                ))}
            </div>
        </section>
    );
};




interface BotonFiltroProps {
    label: string;
    onClick: () => void;
disabled: boolean;
}

{/* Componente - Boton de filtro */}
const BotonFiltro = ({ label, onClick, disabled }: BotonFiltroProps) => {
    return(
    <button
        onClick={onClick}
        disabled={disabled}
        className={`flex-1 h-12 border border-linocolor-2 rounded-linoradius font-medium transition-all ${
        disabled
            ? "bg-gray-400 text-gray-200 cursor-not-allowed opacity-50"
            : "bg-lino-orange text-white hover:bg-lino-orange/80 active:scale-95"
        }`}
    >
      {label}
    </button>
    );
};



