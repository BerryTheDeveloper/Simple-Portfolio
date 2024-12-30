import SectionWrapper from "../components/SectionWrapper.jsx";
// import FakePersonIcon from "../assets/FakePersonIcon.tsx";
// import ArrowUpRightIcon from "../assets/ArrowUpRightIcon.tsx";
import PropTypes from "prop-types";
// import {useState} from "react";

export default function Introduction() {
    // const [isUnderlineActive, setIsUnderlineActive] = useState(false);

    return (
        <SectionWrapper wrapperPosition={'row'}>
            <>
                {/*@TODO Uncomment while I got a photo*/}
                {/*<div className='-mt-4 ml-auto mr-auto'>*/}
                {/*    <FakePersonIcon/>*/}
                {/*</div>*/}
                <p className='text-md leading-relaxed'>
                    I’m a frontend developer with {getTextUnderlined('several years')} of experience.
                    During my journey I develop {getTextUnderlined('high scalable')} and {getTextUnderlined('complex')}
                    {' '} web and mobile applications. Currently working for Right{' '}
                    <span className='text-red-500'>Information</span>.
                    {/*<span*/}
                    {/*    className='mt-4 flex gap-1 justify-center text-center items-center relative w-fit m-auto hover:cursor-pointer'*/}
                    {/*    onMouseEnter={() => setIsUnderlineActive(true)}*/}
                    {/*    onMouseLeave={() => setIsUnderlineActive(false)}>*/}
					{/*	Resume*/}
                    {/*    <span className={`${isUnderlineActive ? 'animate-bounce' : ''}`}>*/}
                    {/*        <ArrowUpRightIcon/>*/}
                    {/*    </span>*/}
                    {/*    {isUnderlineActive && <span*/}
                    {/*        className='fast-line-left-animation absolute left-0 top-full bg-white h-[0.075rem] w-full'></span>}*/}
					{/*</span>*/}
                </p>
            </>
        </SectionWrapper>
    )
}

const getTextUnderlined = (text) => {
    return <span className={'underline underline-offset-4'}>{text}</span>
}

getTextUnderlined.propTypes = {
    text: PropTypes.string.isRequired
}