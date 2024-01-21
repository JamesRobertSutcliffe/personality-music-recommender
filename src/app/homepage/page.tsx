"use client"
import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import Paragraph from "../components/Paragraph"
import Btn from "../components/Btn"
import AnchorBtn from "../components/AnchorBtn"
import Image from "next/image"
import HomepageImage from "../../../public/images/homepage_holder.png"
import Logo from "../../../public/images/logo.png"

export default function Homepage() {

  return (
    <div>
      <Heading>
                Personality Music Recommender
      </Heading>
      <Subheading className="text-agrey">
                Discover new music based on your personality type
      </Subheading>
      <div className="flex justify-center">
        <Image src={HomepageImage}
          className="m-1 p-1 inline"
          width={800}
          height={800}
          alt="Personality Homepage Image">
        </Image>
        <Image src={Logo}
          className="m-1 p-1 inline"
          width={400}
          height={400}
          alt="Personality Homepage Image">
        </Image>
      </div>
      <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum debitis reprehenderit iste consectetur! Aut,
                optio sit. Rerum quis explicabo et provident officiis autem amet neque repellendus? Earum, laborum sunt. Lorem ipsum
                dolor sit amet
      </Paragraph>
      <div className="flex m-5">
        <AnchorBtn link={"login"} className="bg-ablue">Take the Test!</AnchorBtn>
      </div>
    </div>
  )
}