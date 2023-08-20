import { ReactNode } from "react";

function Btn({ children, colour }: { children: ReactNode, colour: string }) {
    return (
        <>
            <button className={`rounded-none bg-${colour} m-auto p-3 font-medium text-lg text-awhite justify-center`}>{children}</button>
        </>
    )
}

export default Btn;