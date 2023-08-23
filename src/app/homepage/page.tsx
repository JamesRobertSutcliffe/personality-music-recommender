"use client"
import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import Paragraph from "../components/Paragraph"
import Btn from "../components/Btn"
import AnchorBtn from "../components/AnchorBtn"
import Image from "next/image"
import HomepageImage from "../../../public/images/homepage_holder.png"

export default function Homepage() {

    return (
        <div>
            <Navbar />
            <Heading>
                Personality Music Recommender
            </Heading>
            <Subheading className="text-agrey">
                Discover new music based on your personality type
            </Subheading>
            <Image src={HomepageImage}
                className="m-auto p-5"
                width={800}
                height={800}
                alt="Personality Homepage Image">
            </Image>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum debitis reprehenderit iste consectetur! Aut,
                optio sit. Rerum quis explicabo et provident officiis autem amet neque repellendus? Earum, laborum sunt. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
            </Paragraph>
            <div className="flex m-5">
                <AnchorBtn link={"./"} className="bg-ablue">Take the Test!</AnchorBtn>
            </div>
        </div>
    )
}