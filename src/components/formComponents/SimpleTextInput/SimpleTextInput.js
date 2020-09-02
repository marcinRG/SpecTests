import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            isError: false
        }
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.setState({
            value: event.target.value,
            isError: !this.validate(event.target.value)
        });
    }

    validate(txtValue) {
        return this.props.validate(txtValue);
    }

    render() {
        return (
            <div className="simple-text-input">
                <label className="input-label">{this.props.label}</label>
                <div>
                    <input className="input-field" type="text" value={this.state.value} onChange={this.changeValue}/>
                </div>
                {this.state.isError &&
                <div className="error-msg">
                    <span className="error-txt">{this.props.errorMessage}</span>
                </div>}
            </div>
        )
    }
}

SimpleTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validate: PropTypes.func
};
