import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react"

function PHitemCard({ children, title, img }: { children: ReactNode, title: String, img: string }) {
    return (
        <Link className="hover:bg-gray-700 delay-50 duration-100 bg-ablack p-5 rounded-lg min-w-[10vw] group p-2 m-2" href="">
            <img src={img}
                className="w-fulls rounded shadow"
                alt="Personality Homepage Image">
            </img>
            <h3 className="text-gray-200 font-bold mt-5 text-center">{title}</h3>
            <p className="text-gray-400 font-light mt-2 text-xs text-center">{children}</p>
        </Link>
    )
}

export default PHitemCard;