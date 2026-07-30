import Abrireditor from "@/components/botones/Abrireditor";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="">Lino Edit</h2>
     
      

      <Abrireditor namePage="Abrir Editor" linkPage="/editor" />
      <Abrireditor namePage="Editor tarjeta" linkPage="/lettereditor" />
    
    </div>
  );
}
