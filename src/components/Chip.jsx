import PropTypes from "prop-types";
import {chipColors} from "../shared/const/chip-colors.ts";

export default function Chip(props) {
    const {label, chipColor = 'black'} = props;

    return <div
        className={'text-center shadow-inner-custom border-1 border-light-black py-1.5 text-sm px-8 rounded-full bg-white-chip'}
        style={{color: chipColors[chipColor]}}>
        <span className={'text-black'}>{label}</span>
    </div>
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    chipColor: PropTypes.oneOf(['black', 'red', 'green', 'pink', 'yellow', 'blue', 'purple'])
}