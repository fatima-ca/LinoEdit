import { useState } from "react";
import { processImagenFilter } from "@/service/filterService";

export function useImageEditor() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleFileChange = (file: File | null) => {
        setImageFile(file);
    
        if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
            setImageUrl("");
        }

        // Si se subio un nuevo archivo, genera su URL temporal
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    const aplicarFiltro = async (tipoFiltro: string) => {
        if (!imageFile) return;

        setIsProcessing(true);
        try {
            const blob = await processImagenFilter(imageFile, tipoFiltro);
      
            if (imageUrl) URL.revokeObjectURL(imageUrl);
      
            const nuevaUrl = URL.createObjectURL(blob);
            setImageUrl(nuevaUrl);
        } catch (error) {
            console.error("Error al conectar con el backend:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return {
        imageFile,
        imageUrl,
        isProcessing,
        handleFileChange,
        aplicarFiltro,

    };
}