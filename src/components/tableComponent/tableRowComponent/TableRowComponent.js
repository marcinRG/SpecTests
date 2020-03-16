import React, {Component} from 'react';

export class TableRowComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="table-cell">Name</td>
                <td className="table-cell">Name</td>
                <td className="table-cell">Name</td>
                <td className="table-cell">Name</td>
            </tr>
        );
    }
}
