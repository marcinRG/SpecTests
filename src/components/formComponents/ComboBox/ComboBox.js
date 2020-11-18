import './ComboBox.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ComboBoxItem} from './ComboBoxItem';
import {valuesAsObjectToArray} from '../../../utils/utils';

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

        this.props.changeValue({
            fieldName: this.props.validateFormPropertyName,
            value: this.props.items[item],
            isValid: this.props.validate(this.props.items[item])
        });
    }

    toggleItemsList(event) {
        event.preventDefault();
        this.setState({showItems: !this.state.showItems});
    }

    render() {
        return (
            <div className="combobox-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={this.props.value[this.props.fieldDisplay]} readOnly={true}/>
                    <button className="input-btn" onClick={this.toggleItemsList}><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements"
                    style={setListStyle(this.state.showItems, valuesAsObjectToArray(this.props.items))} >
                    {valuesAsObjectToArray(this.props.items).map((elem) =>
                        <ComboBoxItem key={elem.id} id={elem.id} value={elem[this.props.fieldDisplay]} action={this.changeSelected}/>
                    )}
                </ul>

                {(!this.props.isFieldValid) &&
                <div className="error-msg">
                    <span className="error-txt">{this.props.errorMessage}</span>
                </div>}

            </div>
        )
    }
}

ComboBox.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    value: PropTypes.object,
    items: PropTypes.object,
    fieldValue: PropTypes.string,
    fieldDisplay: PropTypes.string,
    isFieldValid: PropTypes.bool,
    validate: PropTypes.func,
    changeValue: PropTypes.func,
    validateFormPropertyName: PropTypes.string,
};



export function getHeight(array) {
    return (array.length * 49) + 'px';
}

export function setListStyle(show, array) {
    if (show) {
        return {height: getHeight(array)};
    }
    return {height: 0};
}
