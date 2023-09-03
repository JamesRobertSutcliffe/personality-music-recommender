import { ReactNode } from "react";

function PHitemRow({ children, className, title }: { children: ReactNode, className?: String, title: String }) {
    return (
        <div className={`row-span-1 min-h-[30vh] m-1 p-1 overflow-auto ${className}`}>
            <h3 className="text-xl">{title}</h3>
            <div className="flex items-center justify-start">
                {children}
            </div>
        </div>
    )
}

export default PHitemRow;