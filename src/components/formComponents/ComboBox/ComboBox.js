import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ComboBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="simple-text-input">
                <label>{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="text-container"/>
                    <button className="input-btn">Btn</button>
                </div>
                <ul className="list-elements">
                    <li>element 1</li>
                    <li>element 2</li>
                    <li>element 3</li>
                    <li>element 4</li>
                    <li>element 5</li>
                </ul>
                <div className="error-msg">
                    {this.props.errorMessage}
                </div>
            </div>
        )
    }
}

ComboBox.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object
};
