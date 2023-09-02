import { ReactNode } from "react";

function PHaside({ children, personalityType }: { children?: ReactNode, personalityType: String }) {
    return (
        <>
            <div className={`bg-adarkgrey col-span-1 row-span-4 m-1 p-1`}>
                <div className="grid grid-rows-2 max-h-[83vh] overflow-auto">
                    <div className="row-span-1 bg-ablack p-1 m-2 min-h-[40vh]">
                        <h3 className="text-xl text-center">{personalityType}</h3>
                        <div className="flex items-center justify-center align-center m-4">{children}</div>
                    </div>
                    <div className="row-span-1 bg-ablack p-1 m-2 min-h-[40vh] flex justify-center items-center">
                        <div className="flex place-content-center">
                            <p>{children}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PHaside;