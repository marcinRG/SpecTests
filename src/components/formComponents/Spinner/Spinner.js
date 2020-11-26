import './Spinner.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isDataValid, isNumber, round} from '../../../utils/utils';
import {getValue} from '../SimpleTextInput/SimpleTextInput';
import {fieldState} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

export class Spinner extends Component {

    constructor(props) {
        super(props);
        this.moveDown = this.moveDown.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeValueFromInput = this.changeValueFromInput.bind(this);
    }

    moveUp(event) {
        event.preventDefault();
        if (isNumber(this.props.value) && (Number.parseFloat(this.props.value) + this.props.delta <= this.props.max)) {
            this.changeValue('' + round(Number.parseFloat(this.props.value) + this.props.delta, this.props.rounding));
        }
    }

    changeValue(newValue) {
        console.log(newValue)
        this.props.changeValue({
            fieldName: this.props.propertyName,
            value: newValue,
            isValid: isValueOk(newValue, this.props.min, this.props.max, this.props.labels, this.props.validationFunction)
        });
    }

    moveDown(event) {
        event.preventDefault();
        if (isNumber(this.props.value) && (Number.parseFloat(this.props.value) - this.props.delta >= this.props.min)) {
            this.changeValue('' + round(Number.parseFloat(this.props.value) - this.props.delta, this.props.rounding));
        }
    }

    changeValueFromInput(event) {
        event.preventDefault();
        this.changeValue(event.target.value);
    }

    render() {
        return (
            <div className="spinner-input">
                <label className="input-label">{this.props.labels.labelName}</label>
                <div className="inputs">
                    <input type="text" className="input-field"
                           value={getValue(this.props.value, this.props.propertyName)}
                           onChange={this.changeValueFromInput}/>
                    <div className="button-wrapper">
                        <button className="button-up" onClick={this.moveUp}>&#9650;</button>
                        <button className="button-down" onClick={this.moveDown}>&#9660;</button>
                    </div>
                </div>
                {!fieldIsValid(this.props.value, this.props.min, this.props.max, this.props.propertyName, this.props.labels, this.props.fieldStates, this.props.validationFunction) &&
                <div className="error-msg">
                    <span className="error-txt">{this.props.labels.errorMsg}</span>
                </div>}
            </div>
        );
    }
}

function isValueOk(value, min, max, labelForField, additionalValidationFunction) {
    if (labelForField.required) {
        let isOk = isDataValid(value, labelForField.dataType);
        if (additionalValidationFunction) {
            isOk = isOk && additionalValidationFunction(value, min, max);
        }
        return isOk;
    }
    return true;
}

function fieldIsValid(value, min, max, propertyName, labelForField, fieldStates, additionalValidationFunction) {
    const stateOfField = fieldStates[propertyName];
    if (stateOfField != fieldState.CLEAN) {
        return isValueOk(value, min, max, labelForField, additionalValidationFunction);
    }
    return true;
}


Spinner.propTypes = {

    min: PropTypes.number,
    max: PropTypes.number,
    delta: PropTypes.number,
    rounding: PropTypes.number,
    value: PropTypes.string,
    changeValue: PropTypes.func,
    labels: PropTypes.object,
    propertyName: PropTypes.string,
    fieldStates: PropTypes.object,
    validationFunction: PropTypes.func

};

