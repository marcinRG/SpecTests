import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';
import {ComboBoxItem} from '../ComboBox/ComboBoxItem';

export class DynamicComboBox extends Component {
    constructor(props) {
        super(props);
        console.log(props.items);
        this.state = {
            showItems: false,
            textValue: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.clickDropdownItem = this.clickDropdownItem.bind(this);
    }

    clickDropdownItem(item) {
        this.setState({
            showItems: false,
            textValue: item
        });
    }

    handleTextInput(event) {
        console.log(event.target.value);
        this.setState({
            textValue: event.target.value
        });
    }

    handleClick(event) {
        event.preventDefault();
        console.log('change visibilty');
        this.setState({showItems: !this.state.showItems});
    }

    render() {
        return (
            <div className="combobox-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field" onChange={this.handleTextInput}
                           value={this.state.textValue}/>
                    <button className="input-btn" onClick={this.handleClick}><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements">
{/*
                    {valuesAsObjectToArray(this.props.items).map((elem) =>
                        <ComboBoxItem key={elem.id} id={elem.id} value={elem[this.props.fieldDisplay]} action={this.clickDropdownItem}/>
                    )}
*/}
                </ul>
                <div className="error-msg">
                    <span className="error-txt">This is some random error message!!!</span>
                </div>
            </div>
        )
    }
}

DynamicComboBox.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object,
    items: PropTypes.object,
    fieldDisplay: PropTypes.string,
};
