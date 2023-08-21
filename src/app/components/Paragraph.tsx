import { ReactNode } from "react"

function Paragraph({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <>
            <p className={`w-2/4 font-medium text-lg m-auto p-2 text-center text-awhite ${className}`}>{children}</p>
        </>
    )
}

export default Paragraph;