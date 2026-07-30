import Link from 'next/link';


interface AbrireditorProps {
    namePage: string;
    linkPage: string;
}

export default function Abrireditor({ namePage, linkPage }: AbrireditorProps) {

    return(
        <div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-linoradius">
                <Link href={linkPage} className="hover:text-linocolor-4">
                    {namePage}
                </Link>
            </button>

        </div>

    );
};