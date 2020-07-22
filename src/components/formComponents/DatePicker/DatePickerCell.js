import React from 'react';
import PropTypes from 'prop-types';
import {getElementClass} from '../../../utils/utils';

export function DatePickerCell(props) {
    const onClick = () => {
        if (props.isEnabled) {
            props.action(props.value);
        }
    }

    return (
        <td className={setClass(props)} onClick={onClick}>{props.value}</td>
    );
}

function setClass(props) {
    return getElementClass(props.isEnabled, props.cellClass, 'enabled');
}

DatePickerCell.propTypes = {
    value: PropTypes.number.isRequired,
    cellClass: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired
}
