import PropTypes from "prop-types";

export default function SectionWrapper({as = 'div', wrapperPosition, children}) {
    const Component = as;
    return <Component className={`wrapper-${wrapperPosition}`}>{children}</Component>
}

SectionWrapper.propTypes = {
    as: PropTypes.string,
    children: PropTypes.element.isRequired,
    wrapperPosition: PropTypes.oneOf(['col', 'row']).isRequired
}