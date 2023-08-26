import { ReactNode } from "react"

function Subheading({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <>
            <h2 className={`w-3/5 font-medium text-2xl lg:text-4xl m-auto p-2 text-center ${className}`}>{children}</h2>
        </>
    )
}

export default Subheading