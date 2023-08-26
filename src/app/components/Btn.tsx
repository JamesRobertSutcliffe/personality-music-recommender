import { ReactNode, MouseEventHandler } from "react";

interface BtnProps {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

function Btn({ children, className, onClick }: BtnProps) {
    return (
        <>
            <div className="flex m-2 p-2">
                <button className={`rounded-none m-auto p-3 font-medium text-lg text-awhite justify-center ${className}`} onClick={onClick} >{children}</button>
            </div>
        </>
    )
}

export default Btn;
