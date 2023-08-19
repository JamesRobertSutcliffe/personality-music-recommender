import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import P from "../components/P"
import GreyBtn from "../components/Buttons/GreyBtn"
import RedBtn from "../components/Buttons/RedBtn"
import BlueBtn from "../components/Buttons/BlueBtn"

export default function TailwindTemplates() {
    return (
        <>

            <Navbar />
            <Heading heading="Hello from new-page" />
            <Subheading subheading="This is the sub heading..." />
            <P p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, harum dolorum laborum culpa quis commodi animi sit
                    inventore ex, doloremque nobis itaque eveniet fugiat explicabo? Eligendi sunt obcaecati dicta adipisci? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Necessitatibus soluta, ut adipisci dignissimos iusto assumenda est
                    placeat porro quo fugit magnam molestiae nulla suscipit laborum ducimus laboriosam dolores. Illo, temporibus." />
            <div className="flex m-5 justify center">
                <GreyBtn text="Save Changes" />
                <RedBtn text="Save Changes" />
                <BlueBtn text="Save Changes" />
            </div>

        </>
    )
}