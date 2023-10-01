"use client";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Image from "next/image";
import sixteen from "../../../public/images/16personalities.png";
import Link from "next/link";
import Paragraph from "../components/Paragraph";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";

function Testpage() {
  const { userEmail } = useContext(EmailContext);
  return (
    <>
      <Heading>Take the Test</Heading>
      <Subheading className="text-agrey">
        Find out your personality type via the 16 Personalities Website
      </Subheading>
      <Link
        href={"https://www.16personalities.com/free-personality-test"}
        target="blank"
      >
        <Image
          src={sixteen}
          className="m-auto p-2"
          width={1200}
          height={1200}
          alt="Sixteen Personalities Website"
        ></Image>
      </Link>
      <Paragraph>
        Click on the image above to be redirected to the 16 personalities
        Website. Run through the test and take note of your personality type
        code (just the first 4 letters). Select this code from the dropdown menu
        below to discover music based on this personality type. You can learn
        more about different personality types{" "}
        <Link
          href={"https://www.16personalities.com/personality-types"}
          target="blank"
          style={{ textDecoration: "underline" }}
        >
          here.
        </Link>
      </Paragraph>
      <div className="flex m-2 p-2">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="text-awhite m-auto text-xl">
              Select Personality Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="Architect" className="text-agrey">
              INTJ - Architect
            </DropdownItem>
            <DropdownItem key="Logician" className="text-agrey">
              INTP - Logician
            </DropdownItem>
            <DropdownItem key="Commander" className="text-agrey">
              ENTJ - Commander
            </DropdownItem>
            <DropdownItem key="Debater" className="text-agrey">
              ENTP - Debater
            </DropdownItem>
            <DropdownItem key="Advocate" className="text-agrey">
              INFJ - Advocate
            </DropdownItem>
            <DropdownItem key="Mediator" className="text-agrey">
              INFP - Mediator
            </DropdownItem>
            <DropdownItem key="Protagonist" className="text-agrey">
              ENFJ - Protagonist
            </DropdownItem>
            <DropdownItem key="Campaigner" className="text-agrey">
              ENFP - Campaigner
            </DropdownItem>
            <DropdownItem key="Logistician" className="text-agrey">
              ISTJ - Logistician
            </DropdownItem>
            <DropdownItem key="Defender" className="text-agrey">
              ISFJ - Defender
            </DropdownItem>
            <DropdownItem key="Executive" className="text-agrey">
              ESTJ - Executive
            </DropdownItem>
            <DropdownItem key="Consul" className="text-agrey">
              ESFJ - Consul
            </DropdownItem>
            <DropdownItem key="Virtuoso" className="text-agrey">
              ISTP - Virtuoso
            </DropdownItem>
            <DropdownItem key="Adventurer" className="text-agrey">
              ISFP - Adventurer
            </DropdownItem>
            <DropdownItem key="Entrepreneur" className="text-agrey">
              ESTP - Entrepreneur
            </DropdownItem>
            <DropdownItem key="Entertainer" className="text-agrey">
              ESFP - Entertainer
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

export default Testpage;
