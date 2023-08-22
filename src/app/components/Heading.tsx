import { ReactNode } from "react"


function Heading({ children, className }: { children: ReactNode, className?: string }) {
    return (

        <h1 className={`w-3/5 font-semibold text-6xl m-auto p-2 text-center ${className}`}>{children}</h1>
    )
}

export default Heading