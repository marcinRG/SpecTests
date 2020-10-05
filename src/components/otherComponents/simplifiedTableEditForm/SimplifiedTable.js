import React from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';

export function SimplifiedTable(props) {
    return (
        <table>
            {valuesAsObjectToArray(props.data).map((data,index)=>
                <tr key={index}>
                    <td>row</td>
                    <td>{data.id}</td>
                </tr>
            )}
        </table>
    );
}

SimplifiedTable.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.object,
}
