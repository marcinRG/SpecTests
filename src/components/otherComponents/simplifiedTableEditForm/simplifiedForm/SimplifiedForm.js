import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../../utils/utils';
import './SimplifiedForm.scss';

export class SimplifiedForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.selectedValue)
        return (
            <div className="simplified-form">
                <form className="input-form">
                    {valuesAsObjectToArray(this.props.labels).map((label, index) =>
                        <div key={index} className="simple-text-input">
                            <label className="input-label">{label.name}</label>
                            <input className="input-field" type="text"
                                   value={getValue(label.id, this.props.selectedValue)} onChange={(event) => {
                                this.props.changeSelected(setValue(event.target.value, label.id, this.props.selectedValue));
                            }}/>
                        </div>
                    )}
                    <div className="buttons-row">
                        <button className="rounded-button white-inverted" onClick={this.props.save}
                                disabled={false}>Save
                        </button>
                        <button className="rounded-button blue" onClick={this.props.cancel}
                                disabled={false}>Cancel
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

function getValue(fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        return obj[fieldName];
    }
    return '';
}

function setValue(val, fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        const newValue = {...obj};
        newValue[fieldName] = val;
        return newValue;
    }
}
