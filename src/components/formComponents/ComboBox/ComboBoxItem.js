import React from 'react';
import PropTypes from 'prop-types';

export function ComboBoxItem(props) {

    const onClickHandler = (event) => {
        event.preventDefault();
        props.action(props.id);
    }

    return (
        <li className="list-element" onClick={onClickHandler}>{props.value}</li>
    )
}

ComboBoxItem.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};
