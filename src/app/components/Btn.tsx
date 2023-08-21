import { ReactNode } from "react";

function Btn({ children, colour, className }: { children: ReactNode, colour: string, className?: string }) {
    return (
        <>
            <button className={`rounded-none bg-${colour} m-auto p-3 font-medium text-lg text-awhite justify-center ${className}`}>{children}</button>
        </>
    )
}

export default Btn;
