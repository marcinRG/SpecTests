import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {TableItemsCount} from './tableItemsCount/TableItemsCount';
import {TablePageSelector} from './tablePageSelector/TablePageSelector';
import {buttonTypes, ScreenMessage} from '../screenMessage/ScreenMessage';
import PropTypes from 'prop-types';


class TableComponent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     messageSettings: {
        //         visible: false
        //     },
        //     item: {
        //         current: null,
        //         action: null
        //     },

        this.changePage = this.changePage.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
        this.modalAction = this.modalAction.bind(this);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changePage(i) {
        //console.log(i);
    }

    changeSort(label) {
        console.log(label);
    }

    editItem(itemID) {
        // this.setState({item:{
        //     current: itemID,
        //     action: 'EDIT'
        //     }});
    }

    removeItem(itemID) {
        // this.setState({item:{
        //         current: itemID,
        //         action: 'REMOVE'
        //     }});
        //this.showMessage();
    }

    modalAction(msg) {
        // if (msg === buttonTypes.YES_BUTTON) {
        //     if (this.state.item.action==='REMOVE') {
        //         if (this.state.item.current) {
        //             console.log('removing item:' + this.state.item.current);
        //         }
        //     }
        // }
        // this.hideMessage();
    }

    showMessage() {
        // this.setState({
        //     messageSettings: {
        //         visible: true
        //     }
        // });
    }

    hideMessage() {
        // this.setState({
        //     messageSettings: {
        //         visible: false
        //     }
        // });
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <TableItemsCount count={getLengthFromObject(this.props.data)} selectedPage={this.props.settings.currentPage}
                                 itemsPerPage={this.props.settings.itemsPerPage}/>
                <table className="item-list-table">
                    <TableLabelComponent labels={this.props.labels} editDeleteRowVisible={this.props.settings.editDeleteRowVisible}
                                         changeSort={this.changeSort}
                    />
                    <tbody>
                {/*    {this.state.data.map((document, i) =>*/}
                {/*        <TableRowComponent key={i} id={document.id} date={document.date} number={document.document_nr}*/}
                {/*                           total={document.document_sum} editAction={this.editItem} removeAction={this.removeItem}/>*/}
                {/*    )*/}
                {/*    }*/}
                    </tbody>
                </table>
                {/*<TablePageSelector action={this.changePage} count={30} selectedPage={1} itemsPerPage={10}/>*/}
                {/*<ScreenMessage isVisible={this.state.messageSettings.visible} action={this.modalAction}*/}
                {/*               label="Do you want to remove record" message="Press YES to remove record"*/}
                {/*               buttons={[buttonTypes.YES_BUTTON, buttonTypes.CANCEL_BUTTON]}*/}
                {/*               buttonLabels={{*/}
                {/*                   [buttonTypes.YES_BUTTON]: 'YES',*/}
                {/*                   [buttonTypes.CANCEL_BUTTON]: 'CANCEL'*/}
                {/*               }}*/}
                {/*/>*/}
            </React.Fragment>
        )
    }
}

TableComponent.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.array,
    settings: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        data: state.documents.data,
        labels: state.documents.labels,
        settings: state.documents.settings,
    }
}

export default connect(mapStateToProps)(TableComponent);

function getLengthFromObject(obj) {
    return Object.keys(obj).length;
}
