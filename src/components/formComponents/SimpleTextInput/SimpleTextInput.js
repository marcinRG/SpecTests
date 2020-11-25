import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isDataValid} from '../../../utils/utils';
import {fieldState} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

export function SimpleTextInput(props) {
    const labelForField = props.labels[props.propertyName];

    const changeValue = (event) => {
        if (props.changeValue) {
            props.changeValue(
                {
                    fieldName: props.propertyName,
                    value: event.target.value,
                    isValid: isValueOk(event.target.value, labelForField, props.validationFunction)
                }
            );
        }
    }

    return (

        <div className="simple-text-input">
            <label className="input-label">{labelForField.labelName}</label>
            <input className="input-field" type="text" value={getValue(props.value, props.propertyName)}
                   onChange={changeValue}/>
            {!fieldIsValid(props.value, props.propertyName, labelForField, props.fieldStates,props.validationFunction) &&
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
    fieldStates: PropTypes.object,
    validationFunction: PropTypes.func
};

function getValue(obj) {
    if (obj) {
        return obj + '';
    }
    return '';
}

function isValueOk(value, labelForField, additionalValidationFunction) {
    let isOk = isDataValid(value, labelForField.dataType);
    if (additionalValidationFunction) {
        isOk = isOk && additionalValidationFunction(value);
    }
    return isOk;
}

function fieldIsValid(value, propertyName, labelForField, fieldStates, additionalValidationFunction) {
    const stateOfField = fieldStates[propertyName];
    if (stateOfField != fieldState.CLEAN && (labelForField.required || additionalValidationFunction)) {
        return isValueOk(value, labelForField, additionalValidationFunction);
    }
    return true;
}
