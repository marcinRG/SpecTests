import './Spinner.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Spinner extends Component{

    constructor(props) {
        super(props);
    }

    render() {
      return (
          <div className="spinner-input">
              <label className="input-label">{this.props.label}</label>
              <div className="inputs">
                  <input type="text" className="input-field" />
                  <div className="button-wrapper">
                      <button className="button-up">&#9650;</button>
                      <button className="button-down">&#9660;</button>
                  </div>
              </div>
              <div className="error-msg">
                  <span className="error-txt">This is some random error message!!!</span>
              </div>
          </div>
      );
  }
}

Spinner.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object
};
