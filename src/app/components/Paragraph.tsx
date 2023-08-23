import { ReactNode } from "react"

function Paragraph({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <>
            <p className={`w-3/5 font-medium text-lg m-auto p-2 text-center ${className}`}>{children}</p>
        </>
    )
}

export default Paragraph;