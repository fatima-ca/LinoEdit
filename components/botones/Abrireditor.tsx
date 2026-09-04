import Link from 'next/link';


interface AbrireditorProps {
    namePage: string;
    linkPage: string;
}

export default function Abrireditor({ namePage, linkPage }: AbrireditorProps) {

    return(
        <div>

            <button className="bg-lino-pink hover:bg-lino-pink-soft text-white py-2 px-4 rounded-linoradius">
                <Link href={linkPage}>
                    {namePage}
                </Link>
            </button>

        </div>

    );
};