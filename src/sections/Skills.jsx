import {Title} from "../components/Title.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import Chip from "../components/Chip.jsx";

export default function Skills() {
    const skills = getSkillsInfo();
    return (
        <SectionWrapper wrapperPosition={'col'}>
            <>
                <Title>Skills</Title>
                <div className={'flex flex-row flex-wrap gap-2'}>
                    <>
                        {skills.map((skill, index) => (
                            <Chip key={index} label={skill.label} chipColor={skill.chipColor}/>
                        ))}
                    </>
                </div>
            </>
        </SectionWrapper>
    )
}

/**
 * Get information about the skills of developer
 * @returns {Array<{ chipColor: string, label: string }>}
 */
const getSkillsInfo = () => {
    return [
        {
            chipColor: 'black',
            label: 'Next.js'
        },
        {
            chipColor: 'blue',
            label: 'Typescript'
        },
        {
            chipColor: 'blue',
            label: 'React'
        },
        {
            chipColor: 'red',
            label: 'Anuglar.js'
        },
        {
            chipColor: 'green',
            label: 'Supabase'
        },
        {
            chipColor: 'blue',
            label: 'CSS'
        },
        {
            chipColor: 'pink',
            label: 'SCSS'
        },
        {
            chipColor: 'blue',
            label: 'Docker'
        },
        {
            chipColor: 'purple',
            label: 'Figma'
        },
        {
            chipColor: 'red',
            label: 'Angular'
        },
        {
            chipColor: 'black',
            label: 'Shadcn'
        },
        {
            chipColor: 'red',
            label: 'Java'
        },
        {
            chipColor: 'pink',
            label: 'React Hook Form'
        },
        {
            chipColor: 'blue',
            label: 'Tanstack'
        },
        {
            chipColor: 'blue',
            label: 'Tailwind CSS'
        },
        {
            chipColor: 'yellow',
            label: 'Javascript'
        },
        {
            chipColor: 'blue',
            label: 'Mui React'
        },
        {
            chipColor: 'black',
            label: 'Git modules'
        }
    ]
}