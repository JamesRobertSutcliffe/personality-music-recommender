import { ReactNode } from "react"

function Subheading({ children }: { children: ReactNode }) {
    return (
        <>
            <h2 className="font-medium text-5xl m-2 p-2 text-center text-awhite">{children}</h2>
        </>
    )
}

export default Subheading