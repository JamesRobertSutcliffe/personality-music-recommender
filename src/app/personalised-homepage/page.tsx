'use client'
import Aside from "../components/personalised-homepage-components/Aside";
import ItemCard from "../components/personalised-homepage-components/ItemCard";
import ItemContainer from "../components/personalised-homepage-components/ItemContainer";
import ItemRow from "../components/personalised-homepage-components/ItemRow";
import ItemRowContainer from "../components/personalised-homepage-components/ItemRowContainer";
import Bg from "../components/personalised-homepage-components/Bg";
import TestCards from "../components/personalised-homepage-components/TEST_CARDS/TestCards";

function PersonalisedHomepage() {
    return (
        <Bg>
            <Aside personalityType="Personality Type">
            </Aside>
            <ItemContainer>
                <ItemRowContainer>
                    <ItemRow title="Recommended Songs">
                        <TestCards />
                    </ItemRow>
                    <ItemRow title="Recommended Albums">
                        <TestCards />
                    </ItemRow>
                    <ItemRow title="Recommended Playlists">
                        <TestCards />
                    </ItemRow>
                </ItemRowContainer>
            </ItemContainer>
        </Bg>
    )
}

export default PersonalisedHomepage;