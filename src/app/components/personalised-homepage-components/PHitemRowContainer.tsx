import { ReactNode } from "react";

function PHitemRowContainer({ children, className }: { children: ReactNode, className?: String }) {
    return (
        <div className={`grid-rows-3 max-h-[83vh] overflow-auto ${className}`}>{children}</div>
    )
}

export default PHitemRowContainer;