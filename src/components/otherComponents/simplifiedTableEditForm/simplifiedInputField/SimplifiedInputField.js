import React from 'react';
import {PropTypes} from 'prop-types';
import {dataTypes} from '../../../../utils/dataTypes';
import {getDateString, isNumber, validDate} from '../../../../utils/utils';

export function SimplifiedInputField(props) {
    return (
        <div className="simple-text-input">
            <label className="input-label">{props.label.name}</label>
            <input className="input-field" type="text"
                   value={getValue(props.label.id, props.value)} onChange={(event) => {
                props.changeValue(setValue(event.target.value, props.label.id, props.value));
            }}
            />
            {!isDataValid(getValue(props.label.id, props.value), props.label.dataType) &&
            <div className="error-msg">
                <span className="error-txt">{props.errorMessage}</span>
            </div>}
        </div>
    )
}


SimplifiedInputField.propTypes = {
    label: PropTypes.object,
    value: PropTypes.object,
    changeValue: PropTypes.func,
    errorMessage: PropTypes.string
}

function isValid(fieldName, obj, objDescription) {

}

function getValue(fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        return obj[fieldName]+'';
    }
    return '';
}

function setValue(val, fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        const newValue = {...obj};
        newValue[fieldName] = val;
        return newValue;
    }
}

function isDataValid(valueAsString, dataType) {
    switch (dataType) {
        case dataTypes.DATE: {
            return validDate(valueAsString);
        }
        case dataTypes.STRING: {
            return (valueAsString.length > 0);
        }
        case dataTypes.NUMBER: {
            return isNumber(valueAsString);
        }
    }
}
