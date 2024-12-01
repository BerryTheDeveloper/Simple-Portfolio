import PropTypes from 'prop-types';

const animationDelayObj = {
	'0': 'animation-no-delay',
	'3': 'animation-delay-3',
	'6': 'animation-delay-6',
	'9': 'animation-delay-9',
}

export function Title({ children, animationDelay = 0 }) {

	return (
		<div className={'relative'}>
			<h1 className='text-xl'>{children}</h1>
			<div className={`line-left-animation absolute left-0 top-[110%] bg-white w-1/2 h-0.5 ${animationDelayObj[animationDelay]}`}></div>
			<div className={`line-right-animation absolute top-[110%] right-0 bg-white w-1/2 h-0.5 ${animationDelayObj[animationDelay]}`}></div>
		</div>
	)
	// return <h1 className='text-xl'>{children}</h1>;
}

Title.propTypes = {
	children: PropTypes.string.isRequired,
	animationDelay: PropTypes.string
};
