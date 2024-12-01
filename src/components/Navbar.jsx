import {Title} from "./Title.jsx";
import SectionWrapper from "./SectionWrapper.jsx";
import LightIcon from "../assets/LightIcon.tsx";

export default function Navbar() {
    return (
        <SectionWrapper as={'nav'} wrapperPosition='row'>
            <>
                <Title>Bartłomiej Popiołek</Title>
                {/*<LightIcon/>*/}
            </>
        </SectionWrapper>
    )
}