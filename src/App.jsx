import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ArrowUpRightIcon from './assets/ArrowUpRightIcon';
import FakePersonIcon from './assets/FakePersonIcon';
import LightIcon from './assets/LightIcon';

function App() {
	return (
		<div className='p-4 text-white flex flex-col gap-6'>
			<nav className='wrapper-row'>
				<div className='relative'>
					<Title>Bartłomiej Popiołek</Title>
					<div className='absolute left-0 top-[110%] bg-white w-1/2 h-0.5'></div>
					<div className='absolute top-[110%] right-0 bg-white w-1/2 h-0.5'></div>
				</div>
				<LightIcon />
			</nav>
			<section className='wrapper-row'>
				<div className='-mt-4 ml-auto mr-auto'>
					<FakePersonIcon />
				</div>
				<p className='text-md w-3/5'>
					I’m a frontend developer with several years of experience.
					During my journey I develop high scalable and complex web
					and mobile applications. Currently working for Right{' '}
					<span className='text-red-500'>Information</span>.
					<span className='mt-4 flex gap-2'>
						Resume
						<ArrowUpRightIcon />
					</span>
				</p>
			</section>
			<DividerLine />
			<section className='wrapper-col'>
				<Title>Past Experience</Title>
				<ExperienceSummary />
			</section>
			<DividerLine />
			<section className='wrapper-col'>
				<Title>Skills</Title>
				<Technology />
			</section>
			<DividerLine />
			<section className='wrapper-row'>
				<Title>Contacts</Title>
			</section>
		</div>
	);
}

const experience = [
	{
		position: 'Frontend Developer',
		comapny: () => (
			<p className='flex gap-2'>
				Right <span className='text-red-500'>Information</span>
				<ArrowUpRightIcon />
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
				<ArrowUpRightIcon />
			</p>
		),
		date: '2020 - 2021',
	},
];

function Technology() {
	return <div>Chips</div>;
}

experience.propTypes = {
	position: PropTypes.string.isRequired,
	company: PropTypes.element.isRequired,
	date: PropTypes.string.isRequired,
};

function ExperienceSummary() {
	return (
		<div className='flex flex-col mt-4 gap-1'>
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

function DividerLine() {
	return <div className='w-full h-0.5 bg-white opacity-20'></div>;
}

function Title({ children }) {
	return <h1 className='text-xl'>{children}</h1>;
}

Title.propTypes = {
	children: PropTypes.string.isRequired,
};

export default App;
