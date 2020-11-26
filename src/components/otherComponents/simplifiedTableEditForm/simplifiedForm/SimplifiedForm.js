import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {isDataValid, isFormValid, valuesAsObjectToArray} from '../../../../utils/utils';
import './SimplifiedForm.scss';
import {SimplifiedInputField} from '../simplifiedInputField/SimplifiedInputField';
import {formStates} from '../SimplifiedTableEditForm';

export class SimplifiedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedFields: initFieldState(this.props.labels, this.props.componentState),
            validation: initValidation(this.props.labels, this.props.selectedValue)
        }
        this.changeValueAndValidate = this.changeValueAndValidate.bind(this);
    }

    changeValueAndValidate(obj) {
        this.props.changeSelected(setValue(obj.value, obj.fieldName, this.props.selectedValue));
        const newEditedFields = {...this.state.editedFields, [obj.fieldName]: fieldState.EDITED};
        const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
        this.setState({validation: newValidationObj, editedFields: newEditedFields});
    }

    render() {
        return (
            <div className="simplified-form">
                <form className="input-form">
                    {valuesAsObjectToArray(this.props.labels).map((label, index) =>
                        <SimplifiedInputField key={index} value={this.props.selectedValue} label={label}
                                              fieldStates = {this.state.editedFields}
                                              changeValue={this.changeValueAndValidate}/>
                    )}
                    <div className="buttons-row">
                        <button className="rounded-button white-inverted" onClick={(event) => {
                            event.preventDefault();
                            this.props.save();
                        }}
                                disabled={!isFormValid(this.state.validation)}>Save
                        </button>
                        <button className="rounded-button blue" onClick={(event) => {
                            event.preventDefault();
                            this.props.cancel();
                        }}>Cancel
                        </button>
                    </div>
                </form>
            </div>);
    }

}

SimplifiedForm.propTypes = {
    componentState: PropTypes.string,
    selectedValue: PropTypes.object,
    labels: PropTypes.object,
    save: PropTypes.func,
    cancel: PropTypes.func,
    changeSelected: PropTypes.func
}

function setValue(val, fieldName, obj) {
    if (obj) {
        const newValue = {...obj};
        newValue[fieldName] = val;
        return newValue;
    }
    return obj;
}

export function initValidation(labels, obj) {
    let formFieldsValidation = {};
    const labelKeys = Object.keys(labels);
    labelKeys.forEach(label => {
        formFieldsValidation = {...formFieldsValidation,[label]: getObjectValidation(obj, label, labels)};
    });
    return formFieldsValidation;
}

function getObjectValidation(obj, label,labels) {
    if (labels[label].required) {
        return hasValue(obj,label,labels[label].dataType);
    }
    return true;
}

function hasValue(obj, fieldName, dataType) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        return isDataValid(obj[fieldName], dataType);
    }
    return false;
}

export function initFieldState(labels,componentState) {
    switch (componentState) {
        case formStates.ADD_NEW: {
            return getFormState(labels, fieldState.CLEAN);
        }
        case formStates.EDIT: {
            return getFormState(labels, fieldState.VALUES);
        }
    }
}

export function getFormState(labels, fieldState) {
    let formFieldsState = {};
    const labelKeys = Object.keys(labels);
    labelKeys.forEach(label => {
        formFieldsState = {...formFieldsState,[label]: fieldState};
    });
    return formFieldsState;
}


export const fieldState = {
    CLEAN: 'clean',
    EDITED: 'edited',
    VALUES: 'values',
}

