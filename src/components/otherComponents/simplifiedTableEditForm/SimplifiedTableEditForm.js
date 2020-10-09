import React, {Component} from 'react';
import {SimplifiedForm} from './simplifiedForm/SimplifiedForm';
import {SimplifiedTable} from './simplifiedTable/SimplifiedTable';
import {PropTypes} from 'prop-types';
import {SimplifiedMessage} from './simplifiedMessage/SimplifiedMessage';
import './SimplifiedTableEditForm.scss';
import {dataTypes} from '../../../utils/dataTypes';
import {getDateString} from '../../../utils/utils';


export class SimplifiedTableEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentState: formStates.TABLE,
            selectedItem: {}
        }

        this.showRemoveDialog = this.showRemoveDialog.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.showNewForm = this.showNewForm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.changeSelectedItem = this.changeSelectedItem.bind(this);
    }

    changeSelectedItem(obj) {
        this.setState({
            selectedItem: obj
        });
    }

    showRemoveDialog(id) {
        if (this.state.componentState === formStates.TABLE) {
            this.setState({
                componentState: formStates.REMOVE,
                selectedItem: this.props.data[id]
            });
        }
    }

    showNewForm() {
        if (this.state.componentState === formStates.TABLE) {
            this.setState({
                componentState: formStates.ADD_NEW,
                selectedItem: createEmpty(this.props.labels)
            });
        }
    }

    showEditForm(id) {
        if (this.state.componentState === formStates.TABLE) {
            this.setState({
                componentState: formStates.EDIT,
                selectedItem: this.props.data[id]
            });
        }
    }

    cancel() {
        if (this.state.componentState !== formStates.TABLE) {
            this.setState({
                componentState: formStates.TABLE,
                selectedItem: {}
            });
        }
    }

    save() {
        console.log('save:');
        this.setState({
            componentState: formStates.TABLE,
            selectedItem: {}
        });

    }

    remove() {
        console.log('remove:');
        this.setState({
            componentState: formStates.TABLE,
            selectedItem: {}
        });
    }

    render() {
        return (
            <div className="simplified-table-edit-form">
                {(this.state.componentState === formStates.EDIT || this.state.componentState === formStates.ADD_NEW) &&
                <SimplifiedForm labels={this.props.labels} save={this.save} cancel={this.cancel}
                                selectedValue={this.state.selectedItem} changeSelected={this.changeSelectedItem}/>}

                {this.state.componentState === formStates.REMOVE &&
                <SimplifiedMessage buttonCancelLabel={'Cancel'} buttonOKLabel={'Ok'} message={'Czy chcesz usunąć wybraną wartość?'}
                                   cancelAction={this.cancel} removeAction={this.remove}/>}

                <SimplifiedTable data={this.props.data} labels={this.props.labels} edit={this.showEditForm}
                                 remove={this.showRemoveDialog}/>
                <div className="buttons-table">
                    <button className="rounded-button white-inverted" onClick={this.showNewForm}>Add new</button>
                </div>

            </div>);
    }
}

SimplifiedTableEditForm.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.object,
    changeValue: PropTypes.func,
    removeValue: PropTypes.func
}

const formStates = {
    'TABLE': 'table',
    'EDIT': 'show edit form',
    'REMOVE': 'show remove question',
    'ADD_NEW': 'show new form'
}

function createEmpty(labels) {
    const obj = {};
    Object.keys(labels).forEach(label => {
        obj[label] = getEmptyValue(labels[label].dataType);
    });
    console.log(obj);
    return obj;
}

function getEmptyValue(dataType) {
    switch (dataType) {
        case dataTypes.DATE: {
            return getDateString(new Date().toString(), '-');
        }
        case dataTypes.STRING: {
            return '-';
        }
        case dataTypes.NUMBER: {
            return 0;
        }
        default: {
            return false;
        }
    }

}