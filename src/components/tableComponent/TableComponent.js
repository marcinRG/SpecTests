import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {TableItemsCount} from './tableItemsCount/TableItemsCount';
import {TablePageSelector} from './tablePageSelector/TablePageSelector';
import {buttonTypes, ScreenMessage} from '../screenMessage/ScreenMessage';
import PropTypes from 'prop-types';
import {actionNames} from '../../reduxSettings/constants';
import {sortOrder} from '../../utils/sortOdrer';
import {objectPropertiesToArray} from '../../utils/utils';


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
        console.log(i);
    }

    changeSort(label) {
        const index = getLabelIndex(label, this.props.labels);
        const obj = changeSortDirection(this.props.labels[index]);
        this.props.changeSortMethod({
            index: index,
            newValue: obj
        });
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
        return (
            <React.Fragment>
                <TableItemsCount count={getLengthFromObject(this.props.data)}
                                 selectedPage={this.props.settings.currentPage}
                                 itemsPerPage={this.props.settings.itemsPerPage}/>
                <table className="item-list-table">
                    <TableLabelComponent labels={this.props.labels}
                                         editDeleteRowVisible={this.props.settings.editDeleteRowVisible}
                                         changeSort={this.changeSort}
                    />
                    <tbody>
                    {objectPropertiesToArray(this.props.data).map((document, i) =>
                        <TableRowComponent key={i} value={document} defs={this.props.labels} editAction={this.editItem}
                                           removeAction={this.removeItem}/>)}
                    </tbody>
                </table>
                <TablePageSelector action={this.changePage} count={getLengthFromObject(this.props.data)}
                                   selectedPage={this.props.settings.currentPage}
                                   itemsPerPage={this.props.settings.itemsPerPage}/>
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
    changeSortMethod: PropTypes.func
};

function mapStateToProps(state) {
    return {
        data: state.documents.data,
        labels: state.documents.labels,
        settings: state.documents.settings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeSortMethod: (obj) => {
            dispatch({
                type: actionNames.CHANGE_SORT_METHOD,
                value: obj
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

function getLengthFromObject(obj) {
    return Object.keys(obj).length;
}

function getLabelIndex(labelField, labels) {
    return labels.findIndex((label) => {
        return label.labelField === labelField;
    });
}

function changeSortDirection(obj) {
    const copy = {...obj};
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
