import React from 'react';
import {PropTypes} from 'prop-types';
import {isDataValid} from '../../../../utils/utils';
import {fieldState} from '../simplifiedForm/SimplifiedForm';

export function SimplifiedInputField(props) {
    return (
        <div className="simple-text-input">
            <label className="input-label">{props.label.name}</label>
            <input className="input-field" type="text"
                   value={getValue(props.label.id, props.value)} onChange={(event) => {
                props.changeValue({
                    fieldName: props.label.id,
                    value: event.target.value,
                    isValid: dataValid(event.target.value + '', props.label)
                });
            }}
            />
            {!fieldIsValid(getValue(props.label.id, props.value), props.label, props.fieldStates) &&
            <div className="error-msg">
                <span className="error-txt">{props.label.errorMsg}</span>
            </div>}
        </div>
    )
}


SimplifiedInputField.propTypes = {
    label: PropTypes.object,
    fieldStates: PropTypes.object,
    value: PropTypes.object,
    changeValue: PropTypes.func
}

function dataValid(value,label) {
    if (label.required) {
        return isDataValid(value, label.dataType);
    }
    return true;
}

function fieldIsValid(value, objDescription, fieldStates) {
    const stateOfField = fieldStates[objDescription.id];
    if (stateOfField != fieldState.CLEAN && objDescription.required) {
        return isDataValid(value, objDescription.dataType);
    }
    return true;
}

function getValue(fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        return obj[fieldName] + '';
    }
    return '';
}

