import React, {Component} from 'react';
import {SimplifiedForm} from './SimplifiedForm,';
import {SimplifiedTable} from './SimplifiedTable';
import {PropTypes} from 'prop-types';

export class SimplifiedTableEditForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <SimplifiedForm labels={this.props.labels}/>
                <SimplifiedTable data={this.props.data} labels={this.props.labels}/>
            </div>);
    }
}

SimplifiedTableEditForm.propTypes = {
    data: PropTypes.object,
    labels: PropTypes.object,
    changeValue: PropTypes.func,
    removeValue: PropTypes.func
}
