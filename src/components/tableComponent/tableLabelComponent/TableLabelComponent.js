import React, {Component} from 'react';
import {LabelComponent} from './LabelComponent';
import PropTypes from 'prop-types';

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
                                    labelField={label.labelField}/>)
                }
                {createOperationsLabel(this.props.editDeleteRowVisible, 'operacje')}
            </tr>
            </thead>
        );
    }
}

TableLabelComponent.propTypes = {
    labels: PropTypes.array,
    editDeleteRowVisible: PropTypes.bool,
    changeSort: PropTypes.func
}

function createOperationsLabel(editDeleteRowVisible, labelName) {
    if (editDeleteRowVisible) {
        return (
            <th className="header-cell">{labelName}</th>
        )
    }
}

function getHeadersLabels(labels) {
    return labels.filter(label => {
        return label.isTableHeader;
    })
}
