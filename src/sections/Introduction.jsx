import SectionWrapper from "../components/SectionWrapper.jsx";
// import FakePersonIcon from "../assets/FakePersonIcon.tsx";
import ArrowUpRightIcon from "../assets/ArrowUpRightIcon.tsx";
import PropTypes from "prop-types";

export default function Introduction() {
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
                    <span className='mt-4 flex gap-2 justify-center'>
						Resume
						<ArrowUpRightIcon/>
					</span>
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