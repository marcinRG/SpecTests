import React, {Component} from 'react';
import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {TableItemsCount} from './tableItemsCount/TableItemsCount';
import {TablePageSelector} from './tablePageSelector/TablePageSelector';
import {ScreenMessage} from '../screenMessage/ScreenMessage';



export class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSettings: {
                visible: false
            },
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
        };

        this.changePage = this.changePage.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
    }

    changePage(i) {
        console.log(i);
    }

    showMessage() {
        this.setState({
            messageSettings: {
                visible: true
            }
        });
    }

    hideMessage() {
        this.setState({
            messageSettings: {
                visible: false
            }
        });
    }

    render() {
        return (
            <React.Fragment>

                <TableItemsCount count={30} selectedPage={1} itemsPerPage={10}/>
                <table className="item-list-table">
                    <TableLabelComponent/>
                    <tbody>
                    {this.state.data.map((document, i) =>
                        <TableRowComponent key={i} date={document.date} number={document.document_nr}
                                           total={document.document_sum}/>
                    )
                    }
                    </tbody>
                </table>
                <TablePageSelector action={this.changePage} count={30} selectedPage={1} itemsPerPage={10}/>
                {/*<button onClick={this.showMessage}>XXXXXX</button>*/}
                {/*<ScreenMessage isVisible={this.state.messageSettings.visible} action={this.hideMessage}/>*/}
            </React.Fragment>
        )
    }
}
