import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {isFormValid, valuesAsObjectToArray} from '../../../../utils/utils';
import './SimplifiedForm.scss';
import {SimplifiedInputField} from '../simplifiedInputField/SimplifiedInputField';

export class SimplifiedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: {}
        }
        this.changeValueAndValidate = this.changeValueAndValidate.bind(this);
    }

    changeValueAndValidate(obj) {
        this.props.changeSelected(setValue(obj.value, obj.fieldName, this.props.selectedValue));
        const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
        this.setState({validation: newValidationObj});
    }

    render() {
        return (
            <div className="simplified-form">
                <form className="input-form">
                    {valuesAsObjectToArray(this.props.labels).map((label, index) =>
                        <SimplifiedInputField key={index} value={this.props.selectedValue} label={label}
                                              changeValue={this.changeValueAndValidate}/>
                    )}
                    <div className="buttons-row">
                        <button className="rounded-button white-inverted" onClick={(event) => {
                            event.preventDefault();
                            this.props.save()
                        }}
                                disabled={!isFormValid(this.state.validation)}>Save
                        </button>
                        <button className="rounded-button blue" onClick={(event) => {
                            event.preventDefault();
                            this.props.cancel();
                        }}>Cancel
                        </button>
                    </div>
                </form>
            </div>);
    }

}

SimplifiedForm.propTypes = {
    selectedValue: PropTypes.object,
    labels: PropTypes.object,
    save: PropTypes.func,
    cancel: PropTypes.func,
    changeSelected: PropTypes.func
}

function setValue(val, fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        const newValue = {...obj};
        newValue[fieldName] = val;
        return newValue;
    }
    return obj;
}
