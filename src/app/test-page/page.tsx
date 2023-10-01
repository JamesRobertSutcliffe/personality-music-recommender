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

const personalityTypes = [
  { code: "INTJ", name: "Architect" },
  { code: "INTP", name: "Logician" },
  { code: "ENTJ", name: "Commander" },
  { code: "ENTP", name: "Debater" },
  { code: "INFJ", name: "Advocate" },
  { code: "INFP", name: "Mediator" },
  { code: "ENFJ", name: "Protagonist" },
  { code: "ENFP", name: "Campaigner" },
  { code: "ISTJ", name: "Logistician" },
  { code: "ISFJ", name: "Defender" },
  { code: "ESTJ", name: "Executive" },
  { code: "ESFJ", name: "Consul" },
  { code: "ISTP", name: "Virtuoso" },
  { code: "ISFP", name: "Adventurer" },
  { code: "ESTP", name: "Entrepreneur" },
  { code: "ESFP", name: "Entertainer" },
];

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
          <DropdownMenu aria-name="Static Actions">
            {personalityTypes.map(({ code, name }) => (
              <DropdownItem key={code} className="text-agrey">
                {`${code} - ${name}`}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

export default Testpage;
