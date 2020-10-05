import React from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';

export function SimplifiedForm(props) {
    return (
        <div>
            <form>
                {valuesAsObjectToArray(props.labels).map((label, index) =>
                    <div key={index} className="simple-text-input">
                        <label className="input-label">{label.name}</label>
                        <input className="input-field" type="text" value={''} readOnly={true}/>
                    </div>
                )}
            </form>
        </div>);
}

SimplifiedForm.propTypes = {
    labels: PropTypes.object
}
