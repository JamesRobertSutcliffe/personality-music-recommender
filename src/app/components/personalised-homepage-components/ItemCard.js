'use client'
import { ReactNode } from "react";

function ItemCard({ children, title, img, trackID, setPlaybackID }) {

    return (
        <div className="hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 delay-50 duration-100 bg-ablack p-5 rounded-lg min-w-[10vw] group p-2 m-2" id={trackID} onClick={setPlaybackID}>
            <img src={img}
                className="w-fulls rounded shadow"
                alt="Personality Homepage Image">
            </img>
            <h3 className="text-gray-200 font-bold mt-5 text-center">{title}</h3>
            <p className="text-gray-400 font-light mt-2 text-xs text-center">{children}</p>
        </div>
    )
}

export default ItemCard;