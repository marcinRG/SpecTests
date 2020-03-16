import React, {Component} from 'react';


export class TableLabelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                {
                    labelName: 'date',
                    labelField: 'date',
                    sortable: true
                },
                {
                    labelName: 'document no.',
                    labelField: 'document_nr',
                    sortable: true
                },
                {
                    labelName: 'total',
                    labelField: 'document_sum',
                    sortable: true
                }
            ],
            settings: {
                editDeleteRowVisible: true
            }
        };
    }

    render() {
        return (
            <thead>
            <tr>
                <td className="header-cell">Name</td>
                <td className="header-cell">Name</td>
                <td className="header-cell">Name</td>
                <td className="header-cell">Name</td>
            </tr>
            </thead>
        );
    }
}
