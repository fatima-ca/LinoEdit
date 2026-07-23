// Header.tsx
// Este encabezado incluye el nombre de la pagina y logo, se presenta en cada vista

import Link from 'next/link';


export default function Header() {
  return (
    <header className="bg-lino-purple text-white py-4 top-0">

      <div className="container mx-auto px-4 flex justify-between items-center">

        <Link href="/" className="hover:text-linocolor-4 font-sans">
          <h1>LinoEdit</h1>
        </Link>
        <h1 className="font-sans">Lino Edit | Uwu</h1>
        
      </div>
    </header>
  );
}
