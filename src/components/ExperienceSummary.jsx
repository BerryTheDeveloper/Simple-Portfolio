import PropTypes from "prop-types";
import React, {Fragment} from "react";
import ArrowUpRightIcon from "../assets/ArrowUpRightIcon.tsx";
import {animationDelayObj} from "../shared/const/object-with-css-class.ts";

const experience = [
    {
        position: 'Frontend Developer',
        company: <Company
            link={'https://www.rightinformation.com'}
            firstText={'Right'}
            secondText={'Information'}
            color={'red'}/>,
        date: '2021 - Present',
    },
    {
        position: 'Frontend Developer',
        company: <Company
            link={'https://coderscrew.pl/'}
            firstText={'Stowarzyszenie'}
            secondText={'Codres crew'}
            color={'blue'}/>,
        date: '2020 - 2021',
    },
];

experience.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.element.isRequired,
    date: PropTypes.string.isRequired,
};

export default function ExperienceSummary() {
    return (
        <div className='flex flex-col'>
            {experience.map((exp, index) => (
                <Fragment key={index}>
                    <p className='text-lg even:mt-4'>{exp.position}</p>
                    {exp.company}
                    <p className='text-sm'>{exp.date}</p>
                </Fragment>
            ))}
        </div>
    );
}

function Company(props) {
    const {link, color: propsColor, firstText, secondText} = props;
    const [attachUnderline, setAttachUnderline] = React.useState(false);
    const navigateTo = () => {
        window.open(link, '_blank')
    }
    const color = {
        'red': {
            'text': 'text-red-500',
            'bg': 'bg-red-500'
        },
        'blue': {
            'text': 'text-blue-500',
            'bg': 'bg-blue-500'
        }
    }

    return (
        <p className='flex gap-1 items-center hover:cursor-pointer'
           onMouseEnter={() => setAttachUnderline(true)}
           onMouseLeave={() => setAttachUnderline(false)}
           onClick={() => navigateTo()}>
            <span className='relative'>
                {firstText}
                {attachUnderline && <UnderLine color={'bg-white'}/>}
            </span>
            <span className={`${color[propsColor].text} relative`}>
                {secondText}
                {attachUnderline && <UnderLine color={`${color[propsColor].bg}`} animationDelay={0.4}/>}
            </span>
            <span className={`${attachUnderline ? 'animate-bounce' : ''}`}>
                <ArrowUpRightIcon/>
            </span>
        </p>
    )
}

Company.propTypes = {
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    firstText: PropTypes.string,
    secondText: PropTypes.string,
}

const UnderLine = (props) => {
    const {color = 'bg-white', animationDelay = 0} = props;
    return <span
        className={`fast-line-left-animation absolute left-0 top-full ${color} h-[0.075rem] w-full ${animationDelayObj[animationDelay]}`}></span>
}

UnderLine.propTypes = {
    color: PropTypes.string,
    animationDelay: PropTypes.number
};