"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { EmailContext } from "../../context/EmailContext";

interface ICard {
  children?: any;
  title: string;
  img: string;
  trackID: string;
  setPlaybackID: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function ItemCard({ children, title, img, trackID, setPlaybackID }: ICard) {
  const [isSongLiked, setIsSongLiked] = useState(false);
  const { userEmail } = useContext(EmailContext);

  useEffect(() => {
    const addOrDelete = async () => {
      if (isSongLiked) {
        await fetch("/api/liked-song", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_email: userEmail, track_id: trackID }),
        });
      }
      if (!isSongLiked) {
        await fetch("/api/liked-song", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_email: userEmail, track_id: trackID }),
        });
      }
    };
    addOrDelete();
  }, [isSongLiked]);

  async function likeSong() {
    setIsSongLiked(!isSongLiked);
  }

  return (
    <div
      className="hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 delay-50 duration-100 bg-ablack p-5 rounded-lg min-w-[10vw] group p-2 m-2"
      id={trackID}
      onClick={setPlaybackID}
    >
      <img
        src={img}
        className="w-fulls rounded shadow"
        alt="Personality Homepage Image"
      ></img>
      <h3 className="text-gray-200 font-bold mt-5 text-center">{title}</h3>
      <p className="text-gray-400 font-light mt-2 text-xs text-center">
        {children}
      </p>
      <button onClick={likeSong} data-testid="like-button">
        {isSongLiked ? (
          <FaHeart data-testid="filled-heart" />
        ) : (
          <FaRegHeart data-testid="empty-heart" />
        )}
      </button>
    </div>
  );
}

export default ItemCard;
