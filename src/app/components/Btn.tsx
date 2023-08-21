import { ReactNode, MouseEventHandler } from "react";

interface BtnProps {
  children: ReactNode;
  colour: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Btn({ children, colour, className, onClick }: BtnProps) {
    return (
        <>
            <button className={`rounded-none bg-${colour} m-auto p-3 font-medium text-lg text-awhite justify-center ${className}`} onClick={onClick} >{children}</button>
        </>
    )
}

export default Btn;
