import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../../utils/utils';
import './SimplifiedForm.scss';
import {SimplifiedInputField} from '../simplifiedInputField/SimplifiedInputField';

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
                        <SimplifiedInputField key={index} value={this.props.selectedValue} label={label}
                                              changeValue={this.props.changeSelected}
                                              errorMessage={'Tory były złe!!!'}/>
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

