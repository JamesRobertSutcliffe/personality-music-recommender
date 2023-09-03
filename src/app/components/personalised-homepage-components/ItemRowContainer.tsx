import { ReactNode } from "react";

function ItemRowContainer({ children, className }: { children: ReactNode, className?: String }) {
    return (
        <div className={`grid-rows-3 max-h-[83vh] overflow-auto ${className}`}>{children}</div>
    )
}

export default ItemRowContainer;