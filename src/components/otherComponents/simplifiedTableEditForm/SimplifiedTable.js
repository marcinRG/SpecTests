import React from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';
import {SimplifiedTableHeader} from './SimplifiedTableHeader/SimplifiedTableHeader';

export function SimplifiedTable(props) {

    const editItem = (id) => {
        props.edit(id);
    }

    const removeItem = (id) => {
        props.remove(id);
    }

    const labelKeys = Object.keys(props.labels);

    return (
        <table className="item-list-table">
            <SimplifiedTableHeader operationsLabel={'operations'} labels={props.labels}/>
            <tbody>
            {valuesAsObjectToArray(props.data).map((data, index) =>
                createSimplifiedTableRow(index, data, labelKeys, editItem, removeItem)
            )}
            </tbody>
        </table>
    );
}

SimplifiedTable.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.object,
    edit: PropTypes.func,
    remove: PropTypes.func
}

function createSimplifiedTableRow(key, dataObj, labelKeys, editItem, removeItem) {
    return (
        <tr key={key}>
            {labelKeys.map((key, index) =>
                <td className="table-cell" key={index}>{dataObj[key]}</td>
            )}
            <td>
                <button className="table-button" onClick={() => editItem(dataObj.id)}>&#9998; Edit
                </button>
                <button className="table-button white"
                        onClick={() => removeItem(dataObj.id)}>&#128465; Remove
                </button>
            </td>
        </tr>
    );
}
