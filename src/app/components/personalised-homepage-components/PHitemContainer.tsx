import { ReactNode } from "react";

function PHitemContainer({ children, className }: { children: ReactNode, className?: String }) {
    return (
        <div className={`bg-adarkgrey col-span-3 row-span-4 m-1 p-1 ${className}`}>{children}</div>
    )
}

export default PHitemContainer;