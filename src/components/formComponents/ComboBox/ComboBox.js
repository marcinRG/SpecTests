import './ComboBox.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ComboBoxItem} from './ComboBoxItem';
import {isDataValid, valuesAsObjectToArray} from '../../../utils/utils';
import {fieldState} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

export class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: false
        };
        this.toggleItemsList = this.toggleItemsList.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(item) {
        this.setState({
            showItems: false,
        });

        const value = this.props.items[item];

        this.props.changeValue({
            fieldName: this.props.propertyName,
            value,
            isValid: isValueOk(value, this.props.labels, this.props.validationFunction)
        });
    }

    toggleItemsList(event) {
        event.preventDefault();
        this.setState({showItems: !this.state.showItems});
    }

    render() {
        return (
            <div className="combobox-input">
                <label className="input-label">{this.props.labels.labelName}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={getValue(this.props.value,this.props.propertyDisplay)} readOnly={true}/>
                    <button className="input-btn" onClick={this.toggleItemsList}><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements"
                    style={setListStyle(this.state.showItems, valuesAsObjectToArray(this.props.items))} >
                    {valuesAsObjectToArray(this.props.items).map((elem) =>
                        <ComboBoxItem key={elem.id} id={elem.id} value={elem[this.props.propertyDisplay]} action={this.changeSelected}/>
                    )}
                </ul>

                {!fieldIsValid(this.props.value, this.props.propertyName, this.props.labels, this.props.fieldStates, this.props.validationFunction) &&
                <div className="error-msg">
                    <span className="error-txt">{this.props.labels.errorMsg}</span>
                </div>}

            </div>
        )
    }
}


ComboBox.propTypes = {


    value: PropTypes.object,
    items: PropTypes.object,
    fieldValue: PropTypes.string,
    fieldDisplay: PropTypes.string,

    propertyDisplay: PropTypes.string,
    changeValue: PropTypes.func,
    propertyName: PropTypes.string,
    fieldStates: PropTypes.object,
    validationFunction: PropTypes.func,
    labels: PropTypes.object
};

function isValueOk(value, labelForField, additionalValidationFunction) {
    if (labelForField.required) {
        let isOk = isDataValid(value, labelForField.dataType);
        if (additionalValidationFunction) {
            isOk = isOk && additionalValidationFunction(value);
        }
        return isOk;
    }
    return true;
}


function fieldIsValid(value, propertyName, labelForField, fieldStates, additionalValidationFunction) {
    const stateOfField = fieldStates[propertyName];
    if (stateOfField != fieldState.CLEAN) {
        return isValueOk(value, labelForField, additionalValidationFunction);
    }
    return true;
}

function getValue(value,fieldName) {
    if (value && value.hasOwnProperty(fieldName)) {
        return value[fieldName] + '';
    }
    return '';
}

export function getHeight(array) {
    return (array.length * 49) + 'px';
}

export function setListStyle(show, array) {
    if (show) {
        return {height: getHeight(array)};
    }
    return {height: 0};
}
