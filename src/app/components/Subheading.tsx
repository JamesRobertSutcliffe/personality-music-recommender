import { ReactNode } from "react"

function Subheading({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <>
            <h2 className={`font-medium text-5xl m-2 p-2 text-center text-awhite ${className}`}>{children}</h2>
        </>
    )
}

export default Subheading