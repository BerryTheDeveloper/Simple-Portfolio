import {Title} from "./Title.jsx";
import SectionWrapper from "./SectionWrapper.jsx";
import LightIcon from "../assets/LightIcon.tsx";

export default function Navbar() {
    return (
        <SectionWrapper as={'nav'} wrapperPosition='row'>
            <>
                <div className='relative'>
                    <Title>Bartłomiej Popiołek</Title>
                    <div className='absolute left-0 top-[110%] bg-white w-1/2 h-0.5'></div>
                    <div className='absolute top-[110%] right-0 bg-white w-1/2 h-0.5'></div>
                </div>
                <LightIcon/>
            </>
        </SectionWrapper>
    )
}