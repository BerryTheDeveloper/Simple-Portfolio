import PropTypes from 'prop-types';

export function Title({ children }) {
	return <h1 className='text-xl'>{children}</h1>;
}

Title.propTypes = {
	children: PropTypes.string.isRequired,
};
