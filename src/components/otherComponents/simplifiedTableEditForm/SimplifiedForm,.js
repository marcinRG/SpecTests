import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';

export class SimplifiedForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className="input-form">
                    {valuesAsObjectToArray(this.props.labels).map((label, index) =>
                        <div key={index} className="simple-text-input">
                            <label className="input-label">{label.name}</label>
                            <input className="input-field" type="text" value={''} readOnly={true}/>
                        </div>
                    )}
                    <button className="rounded-button blue btn-save" onClick={this.props.save}
                            disabled={false}>Save
                    </button>
                </form>
            </div>);
    }

}

SimplifiedForm.propTypes = {
    labels: PropTypes.object,
    save: PropTypes.func,
    cancel: PropTypes.func
}
