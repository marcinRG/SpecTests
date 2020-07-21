import React from 'react';
import PropTypes from 'prop-types';

export function ComboBoxItem(props) {

    const onClickHandler = () => {
        props.action(props.value);
    }

    return (
        <li className="list-element" onClick={onClickHandler}>{props.value}</li>
    )
}

ComboBoxItem.propTypes = {
    value: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};