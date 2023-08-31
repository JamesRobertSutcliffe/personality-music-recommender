import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Image from "next/image";
import sixteen from "../../../public/images/16personalities.png"
import Link from "next/link";
import Paragraph from "../components/Paragraph";

function Testpage() {

    return (
        <>
            <Heading>
                Take the Test
            </Heading>
            <Subheading className="text-agrey">
                Find out your personality type via the 16 Personalities Website
            </Subheading>
            <Link href={"https://www.16personalities.com/free-personality-test"} target="blank">
                <Image src={sixteen}
                    className="m-auto p-2"
                    width={1200}
                    height={1200}
                    alt="Sixteen Personalities Website">
                </Image>
            </Link>
            <Paragraph>
                Click on the image above to be redirected to the 16 personalities Website. Run through the test and take note of your
                personality type code (just the first 4 letters). Select this code from the dropdown menu below to discover music based on this personality type.
                You can learn more about different personality types <Link href={"https://www.16personalities.com/personality-types"} target="blank" style={{ textDecoration: "underline" }}>here.</Link>
            </Paragraph>
        </>
    )

}

export default Testpage;