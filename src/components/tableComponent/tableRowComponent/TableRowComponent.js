import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatData} from '../../../utils/utils';

export class TableRowComponent extends Component {
    constructor(props) {
        super(props);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    editItem() {
        this.props.editAction(this.props.value.id);
    }

    removeItem() {
        this.props.removeAction(this.props.value.id);
    }

    render() {
        return (
            <tr>
                {renderValues(this.props.value, this.props.defs)}
                <td className="table-cell">
                    <button className="table-button" onClick={this.editItem}>&#9998; Edit
                    </button>
                    <button className="table-button white"
                            onClick={this.removeItem}>&#128465; Remove
                    </button>
                </td>
            </tr>
        );
    }
}

function renderValues(object, defs) {
    return defs.map((value,index) => {
        return (<td className="table-cell" key={index}>{formatData(object[value.labelField], value.dataType)}</td>);
    });
}

TableRowComponent.propTypes = {
    value: PropTypes.object.isRequired,
    defs: PropTypes.array.isRequired,
    editAction: PropTypes.func.isRequired,
    removeAction: PropTypes.func.isRequired
};
