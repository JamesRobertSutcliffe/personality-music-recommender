"use client"
import Heading from "../components/Heading";
import Btn from "../components/Btn";
import Image from "next/image";
import Paragraph from "../components/Paragraph";
import SpotifyLogo from "../../../public/images/spotify_logo.png"
import SpotifyLogo2 from "../../../public/images/Spotify_Logo_2.png"

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
            <Btn onClick={() => console.log("Test!")} className="bg-adarkgrey rounded hover:bg-agrey">
                <Image src={SpotifyLogo}
                    className="m-1 inline"
                    width={70}
                    height={70}
                    alt="Spotify Logo">
                </Image>
                Connect with Spotify
            </Btn>
            <Paragraph>
                Connect your spotify account to login and discover new music based on your personality type. You will be directed to the
                test page where you can find out your personality type and information about it. You will be recommended music from
                music your fellow typees as well as contribute to the recommendations for your personality type pool.
            </Paragraph>

        </>
    )
}

export default Login;