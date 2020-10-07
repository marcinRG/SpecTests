import React, {Component} from 'react';
import {SimplifiedForm} from './SimplifiedForm,';
import {SimplifiedTable} from './SimplifiedTable';
import {PropTypes} from 'prop-types';
import {SimplifiedMessage} from './simplifiedMessage/SimplifiedMessage';

export class SimplifiedTableEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentState: formStates.TABLE
        }
        this.showRemoveDialog = this.showRemoveDialog.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
    }

    showRemoveDialog(id) {
        if (this.state.componentState == formStates.TABLE) {
            this.setState({
                componentState: formStates.REMOVE
            });
            console.log('remove:' + id);
        }
    }

    showEditForm(id) {
        if (this.state.componentState == formStates.TABLE) {
            this.setState({
                componentState: formStates.EDIT
            });
            console.log('edit:' + id);
        }
    }

    cancelAction() {
        if (this.state.componentState !== formStates.TABLE) {
            this.setState({
                componentState: formStates.TABLE
            });
        }
    }

    save(obj) {
        console.log('save:');
        console.log(obj);
    }

    remove(obj) {
        console.log('remove:');
        console.log(obj);
    }

    render() {
        return (
            <div>
                {this.state.componentState === formStates.EDIT &&
                <SimplifiedForm labels={this.props.labels} save={this.save}/>}
                {this.state.componentState === formStates.REMOVE &&
                <SimplifiedMessage buttonCancelLabel={'Cancel'} buttonOKLabel={'Ok'} message={'Czy chcesz usunąć?'}/>}
                <SimplifiedTable data={this.props.data} labels={this.props.labels} edit={this.showEditForm}
                                 remove={this.showRemoveDialog}/>
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