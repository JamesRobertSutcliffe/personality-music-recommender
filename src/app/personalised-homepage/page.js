'use client'
import Aside from "../components/personalised-homepage-components/Aside";
import ItemCard from "../components/personalised-homepage-components/ItemCard";
import ItemContainer from "../components/personalised-homepage-components/ItemContainer";
import ItemRow from "../components/personalised-homepage-components/ItemRow";
import ItemRowContainer from "../components/personalised-homepage-components/ItemRowContainer";
import Bg from "../components/personalised-homepage-components/Bg";
import { useEffect, useState } from "react";
import { fetchArtistAlbum, fetchProfile, fetchUserPlaylists, fetchUserTracks } from "../hooks/spotify/spotify_hooks";

function PersonalisedHomepage() {
    let accessToken = "";

    if (typeof window !== "undefined") {
        accessToken = window.location.hash.split("&")[0].split("=")[1];
    }

    const [profileName, setProfileName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetchProfile(accessToken).then((res) => setUserEmail(res.email));
        fetchProfile(accessToken).then((res) => setProfileName(res.display_name));
        fetchProfile(accessToken).then((res) => setUserImage(res.images?.[1]?.url));
        fetchArtistAlbum(accessToken).then((res) => setAlbums(res.items));
        fetchUserTracks(accessToken).then((res) => setTracks(res.items));
        fetchUserPlaylists(accessToken).then((res) => setPlaylists(res.playlists?.items));
    }, []);

    // Useful data for ML / backend //

    // User top tracks is an array of users top played track IDs
    const userTopTracks = tracks?.map((track) => {
        return track.id
    })

    // User Email - could be used as a unique identifier to store in DB and match to personality type
    const [userEmail, setUserEmail] = useState("");

    console.log(userEmail)

    return (
        <Bg>
            <Aside username={profileName} personalityType="Architect" profileImage={userImage}>
            </Aside>
            <ItemContainer>
                <ItemRowContainer>
                    <ItemRow title="Recommended Songs">
                        {tracks?.map((track) => {
                            return <ItemCard title={track.name} img={track.album.images[1].url}>{track.artists[0].name}</ItemCard>
                        })}
                    </ItemRow>
                    <ItemRow title="Recommended Albums">
                        {albums?.map((album) => {
                            return <ItemCard title={album.name} img={album.images[1].url}>{album.artists[0].name}</ItemCard>
                        })}
                    </ItemRow>
                    <ItemRow title="Recommended Playlists">
                        {playlists?.map((playlist) => {
                            return <ItemCard title={playlist.name} img={playlist.images[0].url}>{playlist.description}</ItemCard>
                        })}
                    </ItemRow>
                </ItemRowContainer>
            </ItemContainer>
        </Bg>
    )
}

export default PersonalisedHomepage;
