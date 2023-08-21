import { ReactNode, MouseEventHandler } from "react";

function Btn({ children, colour, className, onClick }: { children: ReactNode, colour: string, className?: string,  onClick?: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <>
            <button className={`rounded-none bg-${colour} m-auto p-3 font-medium text-lg text-awhite justify-center ${className}`} onClick={onClick} >{children}</button>
        </>
    )
}

export default Btn;
