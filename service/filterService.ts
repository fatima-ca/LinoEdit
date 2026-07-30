
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function processImagenFilter(imageFile: File, typeFilter: string): Promise<Blob> {
    
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("filtro", typeFilter);

    const respuesta = await fetch(`${API_URL}/filters/apply`, {
        method: "POST",
        body: formData,
    });

    if (!respuesta.ok) {
        throw new Error("Error en el servidor al aplicar filtro");
    }
    
    return await respuesta.blob();
}