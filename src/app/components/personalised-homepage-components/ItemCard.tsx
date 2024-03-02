"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart, FaPlayCircle } from "react-icons/fa";
import { EmailContext } from "../../context/EmailContext";
import {
  toggleLikedSong,
} from "../../utils/likedSongsHelpers";
import Link from "next/link";

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
  previewID: string;
  userPremium: string;
  spotLink: string;
  setPlaybackID: (e: React.MouseEvent<HTMLButtonElement>) => void;
  artistName: string;
  likedSongs: ILikedSong[],
  setLikedSongs: React.Dispatch<React.SetStateAction<ILikedSong[]>>
}

function ItemCard({ children, title, img, trackID, previewID, artistName, userPremium, spotLink, setPlaybackID, likedSongs, setLikedSongs }: ICard) {

  const [isSongLiked, setIsSongLiked] = useState(false);
  const { userEmail } = useContext(EmailContext);
  const [trackPremium, setTrackPremium] = useState("");

  useEffect(() => {
    async function checkIfSongIsLiked() {
      const isLiked = likedSongs?.some(song => song.id === trackID);
      setIsSongLiked(isLiked);
    }

    async function checkPremium() {
      userPremium === "premium" ? setTrackPremium(trackID) : setTrackPremium(previewID)
    }

    checkPremium();
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

  function checkPreviewID() {
    return (previewID === null || previewID === undefined) && (userPremium !== "premium");
  }

  return (
    <div
      className="hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 delay-50 duration-100 bg-ablack p-5 rounded-lg min-w-[10vw] group p-2 m-2"
      id={trackPremium}
    // onClick={setPlaybackID}
    >
      <a href={spotLink} target="blank">
        <img
          src={img}
          className="w-fulls rounded shadow"
          alt="Song Cover Image"
        ></img>
      </a>
      <h3 className="text-gray-200 font-bold mt-5 text-center">{title}</h3>
      <p className="text-gray-400 font-light mt-2 text-xs text-center">
        {artistName}
      </p>
      <div className="flex justify-evenly mt-4">
        <button onClick={handleLikeSong} data-testid="like-button">
          {isSongLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
        {!checkPreviewID() && (<button id={trackPremium} onClick={setPlaybackID}>
          <FaPlayCircle />
        </button>)}
      </div>
    </div>
  );
}

export default ItemCard;
