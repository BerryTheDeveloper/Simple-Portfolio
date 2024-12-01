import {Title} from "../components/Title.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ExperienceSummary from "../components/ExperienceSummary.jsx";

export default function PastExperience() {
    return (
        <SectionWrapper wrapperPosition={'col'}>
            <>
                <Title>Past Experience</Title>
                <ExperienceSummary/>
            </>
        </SectionWrapper>
    )
}