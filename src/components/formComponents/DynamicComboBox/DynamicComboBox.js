import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';
import {ComboBoxItem} from '../ComboBox/ComboBoxItem';
import {setListStyle} from '../ComboBox/ComboBox';

export class DynamicComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: false,
            textValue: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.clickDropdownItem = this.clickDropdownItem.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    clickDropdownItem(item) {
        const selected = this.props.items[item];
        this.setState({
            showItems: false,
            textValue: selected[this.props.fieldDisplay],
            selectedItem: elementInTable(selected[this.props.fieldDisplay],this.props.fieldDisplay,valuesAsObjectToArray(this.props.items))
        });
    }

    handleKeyUp(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            console.log('enter clicked');
            this.setState({
                showItems: false,
                selectedItem: elementInTable(event.target.value,this.props.fieldDisplay,valuesAsObjectToArray(this.props.items))
            });
        }

    }

    handleTextInput(event) {
        event.preventDefault();
        this.setState({
            textValue: event.target.value,
            showItems: true,
            selectedItem: elementInTable(event.target.value,this.props.fieldDisplay,valuesAsObjectToArray(this.props.items))
        });
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({showItems: !this.state.showItems});
    }

    render() {

        const dropdownItemList = getElements(this.state.textValue,
            valuesAsObjectToArray(this.props.items),
            this.props.dropdownMaxLength,
            this.props.fieldDisplay);

        return (
            <div className="combobox-input">
                {this.state.item}
                <label className="input-label">{this.props.labels.labelName}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={getValue(this.props.value,this.props.propertyDisplay)}
                           onKeyUp={this.handleKeyUp}/>
                    <button className="input-btn" onClick={this.handleClick}><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements"
                    style={setListStyle(this.state.showItems, dropdownItemList)}>

                    {dropdownItemList.map((elem) =>
                        <ComboBoxItem key={elem.id} id={elem.id} value={elem[this.props.fieldDisplay]}
                                      action={this.clickDropdownItem}/>
                    )}

                </ul>
                {/*{(!this.props.isFieldValid) &&*/}
                {/*<div className="error-msg">*/}
                {/*    <span className="error-txt">{this.props.errorMessage}</span>*/}
                {/*</div>}*/}
            </div>
        )
    }
}

DynamicComboBox.propTypes = {

    dropdownMaxLength: PropTypes.number.isRequired,
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

function elementInTable(txtValue,field,table) {
    const foundElements = findElement(txtValue,field,table);
    if (foundElements && foundElements.length === 1) {
        console.log(foundElements[0]);
        return foundElements[0];
    }
    return {};
}

function findElement(txtValue, field, table) {
    return table.filter(element => {
        return element[field] + '' === txtValue;
    });
}

function getElements(txt, elementList, maxLength, field) {
    return elementList.filter((element) => {
        const val = element[field] + '';
        return val.includes(txt);
    }).slice(0, maxLength);
}

function getValue(value,fieldName) {
    if (value && value.hasOwnProperty(fieldName)) {
        return value[fieldName] + '';
    }
    return '';
}
