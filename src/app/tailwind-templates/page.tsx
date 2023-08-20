import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import Paragraph from "../components/Paragraph"
import Btn from "../components/Btn"

export default function TailwindTemplates() {

    return (
        <div>
            <Navbar />
            <Heading>
                Testing Child Component
            </Heading>
            <Subheading>
                Here is a Subheading test with a <a style={{ color: "yellow" }} href="./">Link</a>
            </Subheading>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum debitis reprehenderit iste consectetur! Aut,
                optio sit. Rerum quis explicabo et provident officiis autem amet neque repellendus? Earum, laborum sunt. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora odit necessitatibus at pariatur hic sed repudiandae, itaque,
                harum fugit dolorem quos aperiam saepe corporis nihil optio tenetur eaque. Recusandae, eos. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Perferendis, placeat ullam harum beatae repudiandae perspiciatis alias exercitationem
                nesciunt unde porro sequi nihil eaque qui quae delectus omnis esse inventore fugit?
            </Paragraph>
            <div className="flex m-5">
                <Btn colour="ared">
                    Call to action red
                </Btn>
                <Btn colour="adarkgrey">
                    Call to action grey
                </Btn>
                <Btn colour="ablue">
                    <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="Google Logo" style={{ maxHeight: "15px", display: "inline" }} /> Sign In
                </Btn>
            </div>
        </div>
    )
}