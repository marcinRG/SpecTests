import React, {Component} from 'react';
import {LabelComponent} from './LabelComponent';
import {sortOrder} from '../../../utils/sortOdrer';


export class TableLabelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                {
                    labelName: 'Date',
                    labelField: 'date',
                    sortable: true
                },
                {
                    labelName: 'Document no.',
                    labelField: 'document_nr',
                    sortable: true
                },
                {
                    labelName: 'Total',
                    labelField: 'document_sum',
                    sortable: true
                }
            ],
            settings: {
                editDeleteRowVisible: true
            }
        };
        this.tableLabelClick = this.tableLabelClick.bind(this);
    }


    tableLabelClick(labelField) {
        const index = getLabelIndex(labelField, this.state.labels);
        const obj = changeSortDirection(this.state.labels[index]);
        const updatedLabels = Array.from(this.state.labels);
        updatedLabels[index] = obj;
        this.setState({labels: updatedLabels});
    }

    render() {
        return (
            <thead>
            <tr>
                {this.state.labels.map((label, i) =>
                    <LabelComponent key={i} labelName={label.labelName} sortable={label.sortable}
                                    sortDirection={label.sortDirection} action={this.tableLabelClick}
                                    labelField={label.labelField}/>)
                }
                {createOperationsLabel(this.state.settings.editDeleteRowVisible, 'Operations')}
            </tr>
            </thead>
        );
    }
}

function getLabelIndex(labelField, labels) {
    return labels.findIndex((label) => {
        return label.labelField === labelField;
    });
}

function changeSortDirection(obj) {
    const copy = Object.assign({}, obj);
    if (copy.sortDirection) {
        if (copy.sortDirection === sortOrder.SORT_DESC) {
            delete copy.sortDirection;
        } else {
            copy.sortDirection = sortOrder.SORT_DESC;
        }
    } else {
        copy.sortDirection = sortOrder.SORT_ASC;
    }
    return copy;
}

function createOperationsLabel(editDeleteRowVisible, labelName) {
    if (editDeleteRowVisible) {
        return (
            <td className="header-cell">{labelName}</td>
        )
    }
}
