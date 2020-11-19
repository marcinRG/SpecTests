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
        this.initState = this.initState.bind(this);
        this.showRemoveDialog = this.showRemoveDialog.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.showNewForm = this.showNewForm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.changeSelectedItem = this.changeSelectedItem.bind(this);
    }

    initState() {
        this.setState({
            componentState: formStates.TABLE,
            selectedItem: {}
        });
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
                selectedItem: this.props.data[id],
                id: id
            });
        }
    }

    showNewForm() {
        if (this.state.componentState === formStates.TABLE) {
            this.setState({
                componentState: formStates.ADD_NEW,
                selectedItem: {},
                id: null
            });
        }
    }

    showEditForm(id) {
        if (this.state.componentState === formStates.TABLE) {
            this.setState({
                componentState: formStates.EDIT,
                selectedItem: this.props.data[id],
                id: id
            });
        }
    }

    cancel() {
        if (this.state.componentState !== formStates.TABLE) {
            this.setState({
                componentState: formStates.TABLE,
                selectedItem: {},
                id: null
            });
        }
    }

    save() {
        let id = this.state.id;
        if (this.state.componentState === formStates.ADD_NEW) {
            id = createNewKey(this.props.data);
            if (this.props.addNew) {
                this.props.addNew({
                    item: this.state.selectedItem,
                    id: id
                });
            }
        }
        if (this.state.componentState == formStates.EDIT) {
            if (this.props.changeValue) {
                this.props.changeValue({
                    item: this.state.selectedItem,
                    id: id
                });
            }
        }
        this.initState();
    }

    remove() {
        if (this.props.removeValue) {
            this.props.removeValue({
                item: this.state.selectedItem,
                id: this.state.id
            });
        }
        this.initState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.isSelected && (prevState.componentState != formStates.TABLE)) {
            this.initState();
        }
    }

    render() {

        return (
            <div className="simplified-table-edit-form">
                {(this.state.componentState === formStates.EDIT || this.state.componentState === formStates.ADD_NEW) &&
                <SimplifiedForm labels={this.props.labels} save={this.save} cancel={this.cancel}
                                selectedValue={this.state.selectedItem} changeSelected={this.changeSelectedItem}
                                componentState={this.state.componentState}
                />}

                {this.state.componentState === formStates.REMOVE &&
                <SimplifiedMessage buttonCancelLabel={'Cancel'} buttonOKLabel={'Ok'}
                                   message={'Czy chcesz usunąć wybraną wartość?'}
                                   cancelAction={this.cancel} removeAction={this.remove}/>}

                <SimplifiedTable data={this.props.data} labels={this.props.labels} edit={this.showEditForm}
                                 remove={this.showRemoveDialog}/>
                <div className="buttons-table">
                    <button className="rounded-button white-inverted" onClick={this.showNewForm}>Add new</button>
                </div>

            </div>);
    }

    componentDidMount() {
        this.setState({
            componentState: formStates.TABLE,
            selectedItem: {}
        });
    }
}

SimplifiedTableEditForm.propTypes = {
    isSelected: PropTypes.bool,
    data: PropTypes.object,
    labels: PropTypes.object,
    changeValue: PropTypes.func,
    removeValue: PropTypes.func,
    addNew: PropTypes.func
}

export const formStates = {
    TABLE: 'table',
    EDIT: 'show edit form',
    REMOVE: 'show remove question',
    ADD_NEW: 'show new form'
};

function createNewKey(values) {
    let dataKeyes = Object.keys(values);
    dataKeyes = dataKeyes.sort((a, b) => a > b);
    return Number.parseInt(dataKeyes[dataKeyes.length - 1]) + 1;
}