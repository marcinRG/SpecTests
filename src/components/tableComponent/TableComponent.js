import React, {Component} from 'react';
import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {TableItemsCount} from './tableItemsCount/TableItemsCount';
import {TablePageSelector} from './tablePageSelector/TablePageSelector';
import {buttonTypes, ScreenMessage} from '../screenMessage/ScreenMessage';


export class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSettings: {
                visible: false
            },
            item: {
                current: null,
                action: null
            },
            data: [
                {
                    id: 1,
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/30',
                    document_sum: 2457.12
                },
                {
                    id: 2,
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/31',
                    document_sum: 210.77
                },
                {
                    id: 3,
                    date: '2020-03-17T11:32:38.000Z',
                    document_nr: '203455/32',
                    document_sum: 5545.66
                },
                {
                    id: 4,
                    date: '2019-12-17T11:32:38.000Z',
                    document_nr: '203455/95',
                    document_sum: 125.30
                },
                {
                    id: 5,
                    date: '2020-02-20T11:32:38.000Z',
                    document_nr: '203455/12',
                    document_sum: 8825.73
                }
            ]
        };

        this.changePage = this.changePage.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
        this.modalAction = this.modalAction.bind(this);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changePage(i) {
        console.log(i);
    }

    editItem(itemID) {
        this.setState({item:{
            current: itemID,
            action: 'EDIT'
            }});
    }

    removeItem(itemID) {
        this.setState({item:{
                current: itemID,
                action: 'REMOVE'
            }});
        this.showMessage();
    }

    modalAction(msg) {
        if (msg === buttonTypes.YES_BUTTON) {
            if (this.state.item.action==='REMOVE') {
                if (this.state.item.current) {
                    console.log('removing item:' + this.state.item.current);
                }
            }
        }
        this.hideMessage();
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
                        <TableRowComponent key={i} id={document.id} date={document.date} number={document.document_nr}
                                           total={document.document_sum} editAction={this.editItem} removeAction={this.removeItem}/>
                    )
                    }
                    </tbody>
                </table>
                <TablePageSelector action={this.changePage} count={30} selectedPage={1} itemsPerPage={10}/>
                <ScreenMessage isVisible={this.state.messageSettings.visible} action={this.modalAction}
                               label="Do you want to remove record" message="Press YES to remove record"
                               buttons={[buttonTypes.YES_BUTTON, buttonTypes.CANCEL_BUTTON]}
                               buttonLabels={{
                                   [buttonTypes.YES_BUTTON]: 'YES',
                                   [buttonTypes.CANCEL_BUTTON]: 'CANCEL'
                               }}
                />
            </React.Fragment>
        )
    }
}
