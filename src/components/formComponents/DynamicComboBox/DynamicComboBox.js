import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DynamicComboBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="combobox-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field"/>
                    <button className="input-btn"><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements">
                    <li className="list-element">element 1</li>
                    <li className="list-element">element 2</li>
                    <li className="list-element">element 3</li>
                    <li className="list-element">element 4</li>
                    <li className="list-element">element 5</li>
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
    validation: PropTypes.object
};
