"use client"
import Heading from "../components/Heading";
import Btn from "../components/Btn";
import Image from "next/image";
import Paragraph from "../components/Paragraph";
import SpotifyLogo from "../../../public/images/spotify_logo.png"
import SpotifyLogo2 from "../../../public/images/Spotify_Logo_2.png"
import Link from "next/link";

const AUTH_URL = "https://accounts.spotify.com/en/authorize?response_type=token&client_id=a96eef12a4ff426fa590bc684129730c&scope=ugc-image-upload%20playlist-modify-private%20playlist-modify-public%20streaming%20user-read-email%20user-top-read%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20user-read-playback-position%20user-read-private&redirect_uri=http://localhost:3000/personalised-homepage"

function Login() {
    return (
        <>
            <Heading>
                Login / Sign Up
            </Heading>
            <Image src={SpotifyLogo2}
                className="m-auto p-2 "
                width={800}
                height={800}
                alt="Spotify Logo">
            </Image>
            <Link href={AUTH_URL}>
                <Btn onClick={() => console.log("Test!")} className="bg-adarkgrey rounded hover:bg-agrey">
                    <Image src={SpotifyLogo}
                        className="m-1 inline"
                        width={70}
                        height={70}
                        alt="Spotify Logo">
                    </Image>
                    Connect with Spotify
                </Btn>
            </Link>
            <Paragraph>
                Connect your spotify account to login and discover new music based on your personality type. You will be directed to the
                test page where you can find out your personality type and information about it. You will be recommended music from
                music your fellow typees as well as contribute to the recommendations for your personality type pool.
            </Paragraph>

        </>
    )
}

export default Login;