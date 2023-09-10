import { ReactNode } from "react";

function Aside({ username, personalityType, profileImage }: { username: String, personalityType?: string, profileImage?: string }) {
    return (
        <>
            <div className={`bg-adarkgrey col-span-1 row-span-4 m-1 p-1`}>
                <div className="grid grid-rows-2 max-h-[83vh] overflow-auto">
                    <div className="row-span-1 bg-ablack p-1 m-2 min-h-[40vh]">
                        <h3 className="text-xl text-center">Logged in as {username}</h3>
                        <div className="flex items-center justify-center align-center m-4">
                            <img src={profileImage} alt="Users Profile Image"></img>
                        </div>
                    </div>
                    <div className="row-span-1 bg-ablack p-1 m-2 min-h-[40vh] flex justify-center items-center">
                        <h1 className="text-xl text-center">Personality Type:{personalityType} (placeholder)</h1>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Aside;