import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isDataValid} from '../../../utils/utils';
import {fieldState} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

export function SimpleTextInput(props) {
    const labelForField = props.labels[props.propertyName];
    console.log('Simple Input text');
    console.log(getValue((props.value, props.propertyName)));

    const changeValue = (event) => {
        if (props.changeValue) {
            props.changeValue(
                {
                    fieldName: props.propertyName,
                    value: event.target.value,
                    isValid: isDataValid(event.target.value, labelForField.dataType)
                }
            );
        }
    }

    return (

        <div className="simple-text-input">
            <label className="input-label">{labelForField.labelName}</label>
            <input className="input-field" type="text" value={getValue(props.value, props.propertyName)}
                   onChange={changeValue}/>
            {!fieldIsValid(props.value, props.propertyName, labelForField, props.fieldStates) &&
            <div className="error-msg">
                <span className="error-txt">{(props.labels[props.propertyName]).errorMsg}</span>
            </div>
            }

        </div>
    )
}

SimpleTextInput.propTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func,
    labels: PropTypes.object,
    propertyName: PropTypes.string,
    fieldStates: PropTypes.object
};

function getValue(obj) {
    if (obj) {
        return obj + '';
    }
    return '';
}

function fieldIsValid(value, propertyName, labelForField, fieldStates) {
    const stateOfField = fieldStates[propertyName];
    console.log(stateOfField);
    if (stateOfField != fieldState.CLEAN && labelForField.required) {
        return isDataValid(value, labelForField.dataType);
    }
    return true;
}