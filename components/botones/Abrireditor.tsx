import Link from 'next/link';
export default function Abrireditor() {

    return(
        <div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-linoradius">
                <Link href="/editor" className="hover:text-linocolor-4">
                    Abrir Editor
                </Link>
            </button>

        </div>

    );
};