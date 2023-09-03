import { ReactNode } from "react";

function Bg({ children, className }: { children: ReactNode, className?: String }) {
    return (
        <div className={`grid grid-cols-4 grid-rows-4 max-h-100vh min-h-[83vh] overscroll-none ${className}`}>{children}</div>
    )
}

export default Bg;