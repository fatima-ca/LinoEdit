"use client";
import React, { useRef, useState} from "react";

interface FileUploadProps {
    onFileChange?: (file: File | null) => void;
};


export default function Subirimagen({ onFileChange }: FileUploadProps) {

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type === "image/png" || file.type === "image/jpeg") {
                setSelectedImage(file);
                onFileChange?.(file);
            } else {
                alert("Por favor, selecciona una imagen válida (PNG o JPG)");
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
            }
        }
    };

    const onChooseFile = () => {
        inputRef.current?.click();
    };

    return(
        <div className="w-full h-full flex flex-col gap-4 border-2 border-lino-purple p-4 rounded-bigradius items-center">
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg" 
                className="hidden"
            />

            {!selectedImage && (
                <button
                    type="button"
                    onClick={onChooseFile}
                    className="w-full px-4 rounded-littleradius border-4 border-dashed border-lino-purple hover:bg-lino-purple-soft"
                >
                    <span className="flex items-center justify-center text-lino-purple">
                        Seleccionar imagen
                    </span>
                </button>
            )}

            {selectedImage && (
                <div className="0 rounded-littleradius p-4 border-2 border-lino-purple bg-lino-pink-soft">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3">

                                <div className="p-2 bg-red-500/20 rounded-lg">
                                    <svg className="w-5 h-5 text-lino-pinkbaby" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <p className="truncate max-w-30 text-lino-purple">
                                       {selectedImage.name}
                                    </p>
                                    <p className="text-lino-purple">
                                        {(selectedImage.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedImage(null);
                                onFileChange?.(null);   
                                if (inputRef.current) {
                                    inputRef.current.value = ""; 
                                }
                            }}
                            className="bg-lino-purple hover:bg-lino-purple-soft hover:text-lino-purple  text-white py-2 px-4 rounded-md transition-colors"
                            title="Eliminar archivo"
                        >
                            x
                        </button>
                    </div>
                </div>
            )}

        </div>

    );
};