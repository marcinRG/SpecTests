import React, {Component} from 'react';
import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {LabelComponent} from './tableLabelComponent/LabelComponent';


export class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/30',
                    document_sum: 2457.12
                },
                {
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/31',
                    document_sum: 210.77
                },
                {
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/32',
                    document_sum: 5545.66
                },
                {
                    date: '2019-12-17T11:32:38.000Z',
                    document_nr: '203455/95',
                    document_sum: 125.30
                },
                {
                    date: '2020-02-20T11:32:38.000Z',
                    document_nr: '203455/12',
                    document_sum: 8825.73
                }
            ]
        }
    }

    render() {
        return (
            <table className="item-list-table">
                <TableLabelComponent/>
                <tbody>
                {this.state.data.map((document, i) =>
                    <TableRowComponent key={i} date={document.date} number={document.document_nr}
                      total={document.document_sum} />
                    )
                }
                </tbody>
            </table>
        )
    }

}
