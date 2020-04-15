import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="simple-text-input">
                <label className="input-label">{this.props.label}</label>
                <div>
                    <input className="input-field" type="text" />
                </div>
                <div className="error-msg">
                    <span className="error-txt">This is some random error message!!!</span>
                </div>
            </div>
        )
    }
}

SimpleTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object
};
