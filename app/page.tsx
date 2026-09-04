import Abrireditor from "@/components/botones/Abrireditor";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <h2 className="text-lino-purple-soft">Lino Edit</h2>
     
      

      <Abrireditor namePage="Editor Imagen" linkPage="/editor" />
      <Abrireditor namePage="Editor Tarjeta" linkPage="/lettereditor" />
    
    </div>
  );
}
