import { ReactNode } from "react"

function Heading({ children }: { children: ReactNode }) {
    return (

        <div className="font-semibold text-7xl m-2 p-2 text-center text-awhite">{children}</div>
    )
}

export default Heading