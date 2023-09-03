'use client'
import PHaside from "../components/personalised-homepage-components/PHaside";
import PHitemCard from "../components/personalised-homepage-components/PHitemCard";
import PHitemContainer from "../components/personalised-homepage-components/PHitemContainer";
import PHitemRow from "../components/personalised-homepage-components/PHitemRow";
import PHitemRowContainer from "../components/personalised-homepage-components/PHitemRowContainer";
import PHbg from "../components/personalised-homepage-components/PHbg";
import TestCards from "../components/personalised-homepage-components/TEST_CARDS/TestCards";

function PersonalisedHomepage() {
    return (
        <PHbg>
            <PHaside personalityType="Personality Type">
            </PHaside>
            <PHitemContainer>
                <PHitemRowContainer>
                    <PHitemRow title="Recommended Songs">
                        <TestCards />
                    </PHitemRow>
                    <PHitemRow title="Recommended Albums">
                        <TestCards />
                    </PHitemRow>
                    <PHitemRow title="Recommended Playlists">
                        <TestCards />
                    </PHitemRow>
                </PHitemRowContainer>
            </PHitemContainer>
        </PHbg>
    )
}

export default PersonalisedHomepage;