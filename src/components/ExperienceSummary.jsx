// import ArrowUpRightIcon from "../assets/ArrowUpRightIcon.tsx";
import PropTypes from "prop-types";
import {Fragment} from "react";

const experience = [
    {
        position: 'Frontend Developer',
        comapny: () => (
            <p className='flex gap-2'>
                Right <span className='text-red-500'>Information</span>
                {/*<ArrowUpRightIcon />*/}
            </p>
        ),
        date: '2021 - Present',
    },
    {
        position: 'Frontend Developer',
        comapny: () => (
            <p className='flex gap-2'>
                Stowarzyszenie{' '}
                <span className='text-blue-500'>Coders Crew</span>
                {/*<ArrowUpRightIcon />*/}
            </p>
        ),
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
                    {exp.comapny()}
                    <p className='text-sm'>{exp.date}</p>
                </Fragment>
            ))}
        </div>
    );
}