"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { EmailContext } from "../../context/EmailContext";
import {
  toggleLikedSong,
} from "../../utils/likedSongsHelpers";

interface ILikedSong {
  title: string,
  img: string,
  id: string
}

interface ICard {
  children?: React.ReactNode;
  title: string;
  img: string;
  trackID: string;
  artistName: string;
  setPlaybackID: (e: React.MouseEvent<HTMLDivElement>) => void;
  likedSongs: ILikedSong[],
  setLikedSongs: React.Dispatch<React.SetStateAction<ILikedSong[]>>
}

function ItemCard({ children, title, img, trackID, artistName, setPlaybackID, likedSongs, setLikedSongs }: ICard) {
  const [isSongLiked, setIsSongLiked] = useState(false);
  const { userEmail } = useContext(EmailContext);

  useEffect(() => {
    async function checkIfSongIsLiked() {
      const isLiked = likedSongs.some(song => song.id === trackID);
      setIsSongLiked(isLiked);
    }

    checkIfSongIsLiked();
  }, [trackID, likedSongs]);

  const updateLikedSongs = () => {
    setLikedSongs(prevLikedSongs => {
      return isSongLiked
        ? prevLikedSongs.filter(song => song.id !== trackID)
        : [...prevLikedSongs, { id: trackID, title, img, artists: [{ name: artistName }] }];
    });
  };

  const toggleLikeStatus = async () => {
    setIsSongLiked(!isSongLiked);
    await toggleLikedSong(userEmail as string, trackID, isSongLiked);
  };

  const handleLikeSong = () => {
    updateLikedSongs();
    toggleLikeStatus();
  };

  return (
    <div
      className="hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 delay-50 duration-100 bg-ablack p-5 rounded-lg min-w-[10vw] group p-2 m-2"
      id={trackID}
      onClick={setPlaybackID}
    >
      <img
        src={img}
        className="w-fulls rounded shadow"
        alt="Song Cover Image"
      ></img>
      <h3 className="text-gray-200 font-bold mt-5 text-center">{title}</h3>
      <p className="text-gray-400 font-light mt-2 text-xs text-center">
        {artistName}
      </p>
      <button onClick={handleLikeSong} data-testid="like-button">
        {isSongLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default ItemCard;
