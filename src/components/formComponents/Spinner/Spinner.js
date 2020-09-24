import './Spinner.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {round} from '../../../utils/utils';

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
        const newValue = Number.parseFloat(this.props.value);
        if (newValue + this.props.delta <= this.props.max) {
            this.changeValue(newValue + this.props.delta);
        }
    }

    changeValue(newValue) {
        this.props.changeValue({
            fieldName: this.props.validateFormPropertyName,
            value: '' + round(newValue, 2),
            isValid: this.props.validate(newValue)
        });
    }

    moveDown(event) {
        event.preventDefault();
        const newValue = Number.parseFloat(this.props.value);
        if (newValue - this.props.delta >= this.props.min) {
            this.changeValue(newValue - this.props.delta);
        }
    }

    changeValueFromInput(event) {
        event.preventDefault();
        // const newValue = event.target.value;
        // if (!Number.isNaN(newValue) && Number.parseFloat(newValue) <= this.props.max && newValue >= this.props.min) {
        //     this.changeValue(Number.parseFloat(newValue));
        // }
    }


    render() {
        return (
            <div className="spinner-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={getValue(this.props.value)}
                           onChange={this.changeValueFromInput}/>
                    <div className="button-wrapper">
                        <button className="button-up" onClick={this.moveUp}>&#9650;</button>
                        <button className="button-down" onClick={this.moveDown}>&#9660;</button>
                    </div>
                </div>
                {!this.props.isFieldValid &&
                <div className="error-msg">
                    <span className="error-txt">{this.props.errorMessage}</span>
                </div>}
            </div>
        );
    }
}

Spinner.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    value: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    delta: PropTypes.number,
    validate: PropTypes.func,
    isFieldValid: PropTypes.bool,
    changeValue: PropTypes.func,
    validateFormPropertyName: PropTypes.string
};

function getValue(num) {
    return '' + num;
}
