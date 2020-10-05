import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export function SimpleTextInput(props) {

    const changeValue = (event) => {
        if (props.changeValue) {
            props.changeValue(
                {
                    fieldName: props.validateFormPropertyName,
                    value: event.target.value,
                    isValid: props.validate(event.target.value)
                }
            );
        }
    }

    return (
        <div className="simple-text-input">
            <label className="input-label">{props.label}</label>
            <input className="input-field" type="text" value={props.value} onChange={changeValue}/>
            {!props.isFieldValid &&
            <div className="error-msg">
                <span className="error-txt">{props.errorMessage}</span>
            </div>}
        </div>
    )
}

SimpleTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validate: PropTypes.func,
    isFieldValid: PropTypes.bool,
    changeValue: PropTypes.func,
    validateFormPropertyName: PropTypes.string
};
