import React, {Component} from 'react';
import {SimplifiedForm} from './SimplifiedForm,';
import {SimplifiedTable} from './SimplifiedTable';
import {PropTypes} from 'prop-types';

export class SimplifiedTableEditForm extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    remove(id) {
        console.log('remove:' + id);
    }

    edit(id) {
        console.log('edit:' + id);
    }

    save(obj) {
        console.log('save:');
        console.log(obj);
    }

    render() {
        return (
            <div>
                <SimplifiedForm labels={this.props.labels} save={this.save}/>
                <SimplifiedTable data={this.props.data} labels={this.props.labels} edit={this.edit}
                                 remove={this.remove}/>
            </div>);
    }
}

SimplifiedTableEditForm.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.object,
    changeValue: PropTypes.func,
    removeValue: PropTypes.func
}
