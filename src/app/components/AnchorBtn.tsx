import { ReactNode } from "react";
import Link from "next/link";

interface BtnProps {
    children: ReactNode;
    className?: string;
    link: string
}

function AnchorBtn({ children, className, link }: BtnProps) {
    return (
        <>
            <Link href={link} className={`rounded-none m-auto p-3 font-medium text-lg text-awhite justify-center hover:cursor-pointer ${className}`}>{children}</Link>
        </>
    )
}

export default AnchorBtn;
