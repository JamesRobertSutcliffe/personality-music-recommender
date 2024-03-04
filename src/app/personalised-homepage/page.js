"use client";
import Aside from "../components/personalised-homepage-components/Aside";
import ItemContainer from "../components/personalised-homepage-components/ItemContainer";
import ItemRow from "../components/personalised-homepage-components/ItemRow";
import ItemRowContainer from "../components/personalised-homepage-components/ItemRowContainer";
import Bg from "../components/personalised-homepage-components/Bg";
import { useEffect, useState, useContext } from "react";
import {
  fetchProfile,
  fetchUserPlaylists,
  fetchUserTracks,
  fetchRecommendedTracks,
  fetchAlbumData,
  fetchLikedSongs
} from "../hooks/spotify/spotify_hooks";
import SpotifyPlayer from "react-spotify-web-playback";
import ItemCard from "../components/personalised-homepage-components/ItemCard";
import Loading from "../components/personalised-homepage-components/Loading";
import { redirect } from "next/navigation";
import { EmailContext } from "../context/EmailContext";
import Iframe from "react-iframe";
import Paragraph from "../components/Paragraph";


function PersonalisedHomepage() {
  // Access token obtained from URL window
  let accessToken = "";
  if (typeof window !== "undefined") {
    accessToken = window.location.hash.split("&")[0].split("=")[1];
  }

  // Variables containing data pulled from API
  const [profileName, setProfileName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [userTopArray, setUserTopArray] = useState([]);
  const [userProduct, setUserProduct] = useState();
  const [dbUser, setDbUser] = useState();
  const [profileLoad, setProfileLoad] = useState(false);
  const { userEmail, setUserEmail } = useContext(EmailContext);

  // Variables / state used to control playback for premium player
  const [playTrack, setPlayTrack] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [playback, setPlayback] = useState(false);

  // Fetches profile info and personalised recommended tracks 
  useEffect(() => {
    const fetchProfileData = async (accessToken) => {
      const profile = await fetchProfile(accessToken);
      setProfileName(profile.display_name);
      setUserEmail(profile.email);
      setUserImage(profile.images?.[1]?.url);
      setUserProduct(profile.product);


      const user = await fetch(`/api/user?email=${profile.email}`).then(
        (res) => res.json()
      );
      setDbUser(user);

      await fetchRecommendedTracks(accessToken, user.personality_type).then(setTracks);
      await fetchLikedSongs(accessToken, profile.email).then(setLikedSongs);
      setProfileLoad(true);
    };

    //Fetches profile data and personal top tracks

    fetchProfileData(accessToken);
    fetchUserTracks(accessToken).then((res) => setUserTopArray(res.items));
    fetchUserPlaylists(accessToken).then((res) =>
      setPlaylists(res.playlists?.items)
    );
  }, [accessToken]);

  // Display reccomended albums pulled from recommended tracks algo

  useEffect(() => {
    fetchAlbumData(accessToken, String(tracks.map((track) => track.album.id).reverse())).then((res) => setAlbums(res.albums))
  }, [tracks])

  // redirects user to test page if they have if they have not previously logged in

  if (dbUser && Object.keys(dbUser).length === 0) return redirect("/test-page");

  // Useful data for ML / backend -- User top tracks is an array of users top played track IDs
  const userTopTracks = userTopArray?.map((track) => {
    return track.id;
  });

  // Below functions play tracks / albums / playlists on click
  function setTrackId(e) {
    setPlayTrack(e.currentTarget.id);
    setPlayerType("track");
    setPlayback(true);
  }

  function setAlbumId(e) {
    setPlayTrack(e.currentTarget.id);
    setPlayerType("album");
    setPlayback(true);
  }

  function setLikedSongId(e) {
    setPlayTrack(e.currentTarget.id);
    setPlayerType("playlist");
    setPlayback(true);
  }

  // userPremium function checks whether user product is premium deciding whether or not to display player
  const userPremium = () => {
    return userProduct === "premium";
  };

  // setProfilePic function checks whether user has spotify profile image / decides whether to display placeholders

  const setProfilePic =
    userImage === undefined ? "https://i.ibb.co/WHfbS7L/logo.png" : userImage;

  return (
    <Bg>
      {profileLoad === true ? (
        <Aside
          username={profileName}
          personalityType={dbUser.personality_type}
          profileImage={setProfilePic}
        ></Aside>
      ) : null}
      {profileLoad === true ? (
        <ItemContainer>
          <ItemRowContainer>
            <ItemRow title="Recommended Songs">
              {tracks?.map((track, index) => {
                return (
                  <ItemCard
                    key={`song${index}`}
                    trackID={track.id}
                    previewID={track.preview_url}
                    title={track.name}
                    img={track.album.images[1].url}
                    spotLink={track.external_urls.spotify}
                    setPlaybackID={setTrackId}
                    userPremium={userProduct}
                    artistName={track.artists[0].name}
                    likedSongs={likedSongs}
                    setLikedSongs={setLikedSongs}
                  >
                    {track.artists[0].name}
                  </ItemCard>
                );
              })}
            </ItemRow>
            <ItemRow title="Recommended Albums">
              {albums?.map((album, index) => {
                return (
                  <ItemCard
                    key={`album${index}`}
                    trackID={album.id}
                    previewID={album.preview_url}
                    title={album.name}
                    spotLink={album.external_urls.spotify}
                    img={album.images[1].url}
                    artistName={album.artists[0].name}
                    setPlaybackID={setAlbumId}
                    userPremium={userProduct}
                  >
                    {album.artists[0].name}
                  </ItemCard>
                );
              })}
            </ItemRow>
            <ItemRow title="Liked Songs">
              {likedSongs.length ? likedSongs.map((song, index) => {
                return (song.error?.status !== 404 &&
                  <ItemCard
                    key={`song${index}`}
                    trackID={song.id}
                    title={song.name}
                    img={song.img ?? song.album.images[1].url}
                    artistName={song.artists[0].name}
                    setPlaybackID={setLikedSongId}
                    likedSongs={likedSongs}
                    setLikedSongs={setLikedSongs}
                  />
                );
              }) : <Paragraph>You haven&apos;t liked any songs yet.</Paragraph>}
            </ItemRow>
          </ItemRowContainer>
        </ItemContainer>
      ) : (
        <Loading />
      )}
      <div className="min-w-[100vw]">
        {userPremium() && (
          <SpotifyPlayer
            token={accessToken}
            uris={[`spotify:${playerType}:${playTrack}`]}
            play={playback}
          ></SpotifyPlayer>
        )}
        {!userPremium() && (
          <Iframe url={playTrack}
            width="100%"
            height="35vh"
            id=""
            className="" />
        )}
      </div>
    </Bg>
  );
}

export default PersonalisedHomepage;
