import React, {Component} from 'react';
import {TableLabelComponent} from './tableLabelComponent/TableLabelComponent';
import {TableRowComponent} from './tableRowComponent/TableRowComponent';
import {TableItemsCount} from './tableItemsCount/TableItemsCount';
import {TablePageSelector} from './tablePageSelector/TablePageSelector';
import {buttonTypes, ScreenMessage} from '../screenMessage/ScreenMessage';
import PropTypes from 'prop-types';
import {sortOrder} from '../../utils/sortOdrer';
import {valuesAsObjectToArray} from '../../utils/utils';


export class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            action: null
        };
        this.changePage = this.changePage.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
        this.modalAction = this.modalAction.bind(this);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changePage(i) {
        if (this.props.changePage) {
            if (i) {
                this.props.changePage({page: i});
            } else {
                if (this.props.settings.currentPage < getPagesNumber(getLengthFromObject(this.props.data), this.props.settings.itemsPerPage)) {
                    this.props.changePage({page: this.props.settings.currentPage + 1});
                } else {
                    this.props.changePage({page: 1});
                }
            }
        }
    }

    changeSort(label) {
        const index = getLabelIndex(label, this.props.labels);
        const obj = changeSortDirection(this.props.labels[index]);
        if (this.props.changeSortMethod) {
            this.props.changeSortMethod({
                index: index,
                newValue: obj
            });
        }
    }

    editItem(itemID) {
        if (this.props.editFunction) {
            this.props.editFunction(itemID);
        }
    }

    removeItem(itemID) {
        this.setState({
            selected: itemID,
            action: actions.REMOVE
        });
        this.showMessage();
    }

    modalAction(msg) {
        if (msg === buttonTypes.YES_BUTTON) {
            if (this.state.action === actions.REMOVE) {
                if (this.state.selected) {
                    console.log('removing item:' + this.state.selected);
                }
            }
        }
        this.hideMessage();
    }

    showMessage() {
        if (this.props.toggleMessageVisibility) {
            this.props.toggleMessageVisibility({
                visible: true
            });
        }
    }

    hideMessage() {
        this.setState({
            selected: null,
            action: null
        })
        if (this.props.toggleMessageVisibility) {
            this.props.toggleMessageVisibility({
                visible: false
            });
        }
    }

    componentWillUnmount() {
        this.hideMessage();
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
                    {/*<tbody>*/}
                    {/*{valuesAsObjectToArray(this.props.data).map((document, i) =>*/}
                    {/*    <TableRowComponent key={i} value={document} defs={this.props.labels} editAction={this.editItem}*/}
                    {/*                       removeAction={this.removeItem}/>)}*/}
                    {/*</tbody>*/}
                </table>
                <TablePageSelector action={this.changePage} selectedPage={this.props.settings.currentPage}
                                   numberOfPages={getPagesNumber(getLengthFromObject(this.props.data), this.props.settings.itemsPerPage)}/>
                <ScreenMessage isVisible={this.props.settings.messageVisible} action={this.modalAction}
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

TableComponent.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.array,
    settings: PropTypes.object,
    changeSortMethod: PropTypes.func,
    toggleMessageVisibility: PropTypes.func,
    changePage: PropTypes.func,
    editFunction: PropTypes.func,
    number: PropTypes.number
};

export function getPagesNumber(count, itemsPerPage) {
    if (count > itemsPerPage) {
        return Math.ceil(count / itemsPerPage);
    }
    return 1;
}

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

const actions = {
    REMOVE: 'remove',
    EDIT: 'edit'
}
