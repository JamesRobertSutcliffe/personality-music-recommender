import { ReactNode } from "react"


function Heading({ children, className }: { children: ReactNode, className?: string }) {
    return (

        <h1 className={`font-semibold text-7xl m-2 p-2 text-center text-awhite ${className}`}>{children}</h1>
    )
}

export default Heading