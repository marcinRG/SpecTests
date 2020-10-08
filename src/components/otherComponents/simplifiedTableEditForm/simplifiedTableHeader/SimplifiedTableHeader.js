import React from 'react';
import {PropTypes} from 'prop-types';
import {valuesAsObjectToArray} from '../../../../utils/utils';

export function SimplifiedTableHeader(props) {
    return (
        <thead>
        <tr>
            {valuesAsObjectToArray(props.labels).map((label, index) =>
                <th key={index} className="header-cell">
                    {label.name}
                </th>
            )}
            <th className="header-cell">{props.operationsLabel}</th>
        </tr>
        </thead>
    )
}

SimplifiedTableHeader.propTypes = {
    operationsLabel: PropTypes.string,
    labels: PropTypes.object
}
