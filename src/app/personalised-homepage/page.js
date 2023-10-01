'use client'
import Aside from "../components/personalised-homepage-components/Aside";
import ItemContainer from "../components/personalised-homepage-components/ItemContainer";
import ItemRow from "../components/personalised-homepage-components/ItemRow";
import ItemRowContainer from "../components/personalised-homepage-components/ItemRowContainer";
import Bg from "../components/personalised-homepage-components/Bg";
import { useEffect, useState } from "react";
import { fetchArtistAlbum, fetchProfile, fetchUserPlaylists, fetchUserTracks, fetchArtistTrack } from "../hooks/spotify/spotify_hooks";
import SpotifyPlayer from 'react-spotify-web-playback';
import ItemCard from "../components/personalised-homepage-components/ItemCard";
import Loading from "../components/personalised-homepage-components/Loading";
import {redirect} from "next/navigation";

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
    const [userTopArray, setUserTopArray] = useState([]);
    const [userProduct, setUserProduct] = useState();
    const [dbUser, setDbUser] = useState();
    const [profileLoad, setProfileLoad] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    // Variables / state used to control playback
    const [playTrack, setPlayTrack] = useState("");
    const [playerType, setPlayerType] = useState("");
    const [playback, setPlayback] = useState(false);

    // Pulls in placeholder data from a couple of areas of Spotify API
    useEffect(() => {
        const fetchProfileData = async (accessToken) => {
        const profile = await fetchProfile(accessToken);
            setProfileName(profile.display_name);
            setUserEmail(profile.email);
            setUserImage(profile.images?.[1]?.url);
            setUserProduct(profile.product);

            const dbUser = await fetch(`/api/user?email=${profile.email}`).then(res => res.json());
            console.log(dbUser);
            setDbUser(dbUser);

            setProfileLoad(true);
        };

        fetchProfileData(accessToken);
        fetchUserTracks(accessToken).then((res) => setUserTopArray(res.items))
        fetchArtistAlbum(accessToken).then((res) => setAlbums(res.items));
        fetchArtistTrack(accessToken).then((res) => setTracks(res.tracks));
        fetchUserPlaylists(accessToken).then((res) => setPlaylists(res.playlists?.items));
    }, [accessToken]);

    if(dbUser && Object.keys(dbUser).length === 0) return redirect('/test-page')
    // Below functions play tracks / albums / playlists on click

    // Useful data for ML / backend //
    // User top tracks is an array of users top played track IDs
    const userTopTracks = userTopArray?.map((track) => {
        return track.id
    })
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

    function setPlaylistId(e) {
        setPlayTrack(e.currentTarget.id);
        setPlayerType("playlist");
        setPlayback(true);
    }


    // userPremium function checks whether user product is premium
    const userPremium = () => {
        return userProduct === "premium"
    }

    // UserProfilePic function checks whether user 

    const setProfilePic = userImage === undefined ? "https://i.ibb.co/WHfbS7L/logo.png" : userImage;

    return (

        <Bg>
            {profileLoad === true ? <Aside username={profileName} personalityType="Architect" profileImage={setProfilePic}></Aside> : null}
            {profileLoad === true ? <ItemContainer>
                <ItemRowContainer>
                    <ItemRow title="Recommended Songs">
                        {tracks?.map((track, index) => {
                            return <ItemCard key={`song${index}`} trackID={track.id} title={track.name} img={track.album.images[1].url} setPlaybackID={setTrackId}>{track.artists[0].name}</ItemCard>
                        })}
                    </ItemRow>
                    <ItemRow title="Recommended Albums">
                        {albums?.map((album, index) => {
                            return <ItemCard key={`album${index}`} trackID={album.id} title={album.name} img={album.images[1].url} setPlaybackID={setAlbumId}>{album.artists[0].name}</ItemCard>
                        })}
                    </ItemRow>
                    <ItemRow title="Recommended Playlists">
                        {playlists?.map((playlist, index) => {
                            return <ItemCard key={`playlist${index}`} trackID={playlist.id} title={playlist.name} img={playlist.images[0].url} setPlaybackID={setPlaylistId}>{playlist.description}</ItemCard>
                        })}
                    </ItemRow>
                </ItemRowContainer>
            </ItemContainer> : <Loading />}
            <div className="min-w-[100vw]">
                {userPremium() && (<SpotifyPlayer
                    token={accessToken}
                    uris={[`spotify:${playerType}:${playTrack}`]}
                    play={playback}>
                </SpotifyPlayer>)}
            </div>
        </Bg>

    )
}

export default PersonalisedHomepage;
