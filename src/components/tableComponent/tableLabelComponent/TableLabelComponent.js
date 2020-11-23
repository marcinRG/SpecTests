import React, {Component} from 'react';
import {LabelComponent} from './LabelComponent';
import PropTypes from 'prop-types';
import {valuesAsObjectToArray} from '../../../utils/utils';

export class TableLabelComponent extends Component {
    constructor(props) {
        super(props);
        this.tableLabelClick = this.tableLabelClick.bind(this);
    }

    tableLabelClick(labelField) {
        this.props.changeSort(labelField);
    }

    render() {
        return (
            <thead>
            <tr>
                {getHeadersLabels(this.props.labels).map((label, i) =>
                    <LabelComponent key={i} labelName={label.labelName} sortable={label.sortable}
                                    sortDirection={label.sortDirection} action={this.tableLabelClick}
                                    labelField={label.id}/>)
                }
                {createOperationsLabel(this.props.editDeleteRowVisible, 'operacje')}
            </tr>
            </thead>
        );
    }
}

TableLabelComponent.propTypes = {
    labels: PropTypes.object,
    editDeleteRowVisible: PropTypes.bool,
    changeSort: PropTypes.func
}

function createOperationsLabel(editDeleteRowVisible, labelName) {
    if (editDeleteRowVisible) {
        return (
            <th className='header-cell'>{labelName}</th>
        )
    }
}

export function getHeadersLabels(labels) {
    return valuesAsObjectToArray(labels).filter(label => {
        return (label.isTableHeader && label.isTableHeader === true);
    });
}
