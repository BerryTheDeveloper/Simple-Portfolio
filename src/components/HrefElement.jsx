import PropTypes from 'prop-types';

export function HrefElement({ href, children }) {
	return (
		<a href={href} target='_blank'>
			{children}
		</a>
	);
}

HrefElement.propTypes = {
	href: PropTypes.string,
	children: PropTypes.element.isRequired,
};
