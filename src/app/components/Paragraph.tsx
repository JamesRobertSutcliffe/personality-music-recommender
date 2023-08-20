import { ReactNode } from "react"

function Paragraph({ children }: { children: ReactNode }) {
    return (
        <>
            <p className="w-2/4 font-medium text-lg m-auto p-2 text-center text-awhite">{children}</p>
        </>
    )
}

export default Paragraph;