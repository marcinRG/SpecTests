import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="simple-text-input">
                <label>{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="text-container" />
                </div>
                <div className="error-msg">
                    {this.props.errorMessage}
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
