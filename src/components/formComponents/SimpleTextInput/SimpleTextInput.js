import './SimpleTextInput.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isError: false
        }
        this.changeValue = this.changeValue.bind(this);

    }

    changeValue(event) {
        if (this.validate(event.target.value)) {
            this.setState({value: event.target.value})
        }
    }

    validate(txtValue) {
        return true;
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
                    <span className="error-txt">This is some random error message!!!</span>
                </div>}
            </div>
        )
    }
}

SimpleTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object
};
