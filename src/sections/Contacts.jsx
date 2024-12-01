import GithubIcon from '../assets/GithubIcon';
import LinkedinIcon from '../assets/LinkedinIcon';
import XIcon from '../assets/XIcon';
import PropTypes from 'prop-types';
import { HrefElement } from '../components/HrefElement';
import { Title } from '../components/Title';
import SectionWrapper from "../components/SectionWrapper.jsx";

const githubProfileLink = "https://github.com/BerryTheDeveloper"
const linkedinProfileLink = "https://www.linkedin.com/in/bart%C5%82omiej-popio%C5%82ek";
const xProfileLink = "https://twitter.com/BerryFSDev";

const contactsLinks = [
	{
		link: githubProfileLink,
		icon: () => <GithubIcon />,
	},
	{
		link: linkedinProfileLink,
		icon: () => <LinkedinIcon />,
	},
	{
		link: xProfileLink,
		icon: () => <XIcon />,
	},
]

contactsLinks.propTypes = {
	arrayWithShape: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			icon: PropTypes.element.isRequired,
		})
	).isRequired,
};

export default function Contacts() {
	return (
		<SectionWrapper wrapperPosition={'col'}>
			<>
				<Title animationDelay={'9'}>Contacts</Title>
				<div className='flex justify-center gap-4 w-full'>
					{contactsLinks.map((link, index) => (
						<HrefElement href={link.link} key={index}>
							{link.icon()}
						</HrefElement>
					))}
				</div>
			</>
		</SectionWrapper>
	);
}
