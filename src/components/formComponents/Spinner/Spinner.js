import './Spinner.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Spinner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            max: 1200,
            min: 0,
            txtCurrent: 0,
            isError: false
        };
        this.moveDown = this.moveDown.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.changeCurrentValue = this.changeCurrentValue.bind(this);
    }

    moveUp(event) {
        event.preventDefault();
        if (this.state.current + 1 <= this.state.max) {
            this.setState({
                current: this.state.current + 1,
                txtCurrent: this.state.current + 1,
                isError: false
            })
        }
    }

    moveDown(event) {
        event.preventDefault();
        if (this.state.current - 1 >= this.state.min) {
            this.setState({
                current: this.state.current - 1,
                txtCurrent: this.state.current - 1,
                isError: false
            })
        }
    }

    changeCurrentValue(event) {
        event.preventDefault();
        const newValue = Number.parseInt(event.target.value, 10);
        if (!Number.isNaN(newValue) && newValue <= this.state.max && newValue >= this.state.min) {
            this.setState({
                current: newValue,
                txtCurrent: newValue,
                isError: false
            });
        } else {
            this.setState({
                txtCurrent: event.target.value,
                isError: true
            })
        }
    }


    render() {
        return (
            <div className="spinner-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={this.state.txtCurrent}
                           onChange={this.changeCurrentValue}/>
                    <div className="button-wrapper">
                        <button className="button-up" onClick={this.moveUp}>&#9650;</button>
                        <button className="button-down" onClick={this.moveDown}>&#9660;</button>
                    </div>
                </div>
                {this.state.isError &&
                <div className="error-msg">
                    <span className="error-txt">This is some random error message!!!</span>
                </div>}
            </div>
        );
    }
}

Spinner.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validate: PropTypes.func,
};
