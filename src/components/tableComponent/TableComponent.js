import React, {Component} from 'react';
import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';


export class TableComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="item-list-table">
                <TableLabelComponent />
                <tbody>
                  <TableRowComponent/>
                  <TableRowComponent/>
                  <TableRowComponent/>
                  <TableRowComponent/>
                  <TableRowComponent/>
                </tbody>
            </table>
        )
    }

}
