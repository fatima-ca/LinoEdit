"use client";
import { useState, useEffect } from "react";

type TipoFiltro = "gris" | "blur" | "edges";

interface TableroProps {
  haveImage: boolean;
  imageUrl?: string;
  imageName?: string;
  onAplicarFiltro: (tipoFiltro: TipoFiltro) => Promise<void>;
  isProcessing?: boolean;
}


const FILTROS_DISPONIBLES: {
  id: TipoFiltro;
  label: string;
}[] = [
  { id: "gris", label: "Escala de Grises" },
  { id: "blur", label: "Desenfoque" },
  { id: "edges", label: "Bordes" },
];



export default function Tablero({ haveImage, imageUrl, imageName, onAplicarFiltro, isProcessing = false }: TableroProps) {
    const [filtroSelected, setFiltroSelected] = useState<string | null>(null);

    const newImageName = () => {
        if (imageName && filtroSelected) {
            return `${imageName.replace(/\.[^/.]+$/, "")}_${filtroSelected}.png`;
        }
    };

    const canDownload = Boolean(!!filtroSelected && haveImage);

    useEffect (() => {
        setFiltroSelected(() => null);
    }, [haveImage]);


    return(
        <section className="w-full h-full flex flex-col gap-6 border-2 border-lino-purple p-6 rounded-bigradius">
            
            <div className="flex-1 min-h-0 w-full flex flex-col">
                {!haveImage ? (
                    <div className="flex-1 min-h-0 flex items-center justify-center w-full border-2 border-dashed  border-lino-purple bg-lino-purple-soft rounded-littleradius overflow-hidden">
                        <h3 className="text-lino-purple">Selecciona una imagen para empezar :D</h3>
                    </div>
                ) : (
                    <>
                        <div  className="flex-1 min-h-0 flex items-center justify-center w-full border border-lino-purple rounded-littleradius overflow-hidden">
                            <img src={imageUrl} alt="Preview" className="max-w-full max-h-full object-contain"/>
                        </div>
                            
                    </>
                )}                                      
            </div>

            

            <div className="w-full flex flex-row gap-2 py-2">
                {FILTROS_DISPONIBLES.map((filtro) => (
                    <BotonFiltro
                        key={filtro.id}
                        label={filtro.label}
                        onClick={() => {void onAplicarFiltro(filtro.id); setFiltroSelected(filtro.label)}}
                        isThereImage={!haveImage || isProcessing}
                    />
                ))}
            </div>

            
                <a 
                    className={`text-center py-2 px-4 rounded-littleradius font-medium transition-colors ${
                    canDownload
                        ? "bg-lino-purple text-lino-purple-soft cursor-pointer hover:bg-lino-purple-soft hover:text-lino-purple"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed opacity-50 pointer-events-none"
                    }`}
                    href={imageUrl}
                    download={`${newImageName()}`}
                    
                >
                    {canDownload ? `Descargar "${newImageName()}"` : "Descargar"}
                    
                </a>
            

        </section>
    );
};




interface BotonFiltroProps {
    label: string;
    onClick: () => void;
    isThereImage: boolean;
}

const BotonFiltro = ({ label, onClick, isThereImage }: BotonFiltroProps) => {
    return(
    <button
        onClick={onClick}
        className={`flex-1 h-12 rounded-littleradius ${
        isThereImage
            ? "bg-gray-400 text-gray-200 cursor-not-allowed opacity-50"
            : "bg-lino-pink text-lino-pink-soft hover:bg-lino-pink-soft hover:text-lino-pink active:scale-95"
        }`}
    >
      {label}
    </button>
    );
};






