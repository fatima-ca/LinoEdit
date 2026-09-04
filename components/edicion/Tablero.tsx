"use client";
import { useState } from "react";

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
    const [text, setText] = useState<string>("");
    const [filtroSelected, setFiltroSelected] = useState<string | null>(null);

    const newImageName = () => {
        if (imageName && filtroSelected) {
            return `${imageName.replace(/\.[^/.]+$/, "")}_${filtroSelected}.png`;
        }
    };


    return(
        <section className="w-full h-full flex flex-col gap-6 border border-lino-purple p-4 rounded-bigradius items-center justify-center">
            

            <div className="flex-1 w-full">

                <div className="justify-center align-center flex flex-col items-center h-full gap-4 border border-lino-purple rounded-littleradius">
                    {!haveImage ? (
                       <p>Sube una imagen</p>
                    ) : (
                        <>
                            <img src={imageUrl} alt="Preview" className="rounded-littleradius object-contain border border-lino-purple"/>
                        </>
                    )}
                </div>
                
                <p className="text-sm font-medium mb-1">
                    Imagen: {`${newImageName()}`}
                </p>
                
                        
                <a className="text-center py-2 px-4 rounded font-medium transition-colors bg-lino-red text-white cursor-pointer hover:bg-lino-red/80"
                    href={imageUrl}
                    download={`${newImageName()}`}
                    onClick={(e) => !text.trim() && e.preventDefault()}
                >
                    Download
                </a>
                                    
            </div>

            <div className="w-full flex flex-row gap-2 py-2">
                {FILTROS_DISPONIBLES.map((filtro) => (
                    <BotonFiltro
                        key={filtro.id}
                        label={filtro.label}
                        onClick={() => {void onAplicarFiltro(filtro.id); setFiltroSelected(filtro.label)}}
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






