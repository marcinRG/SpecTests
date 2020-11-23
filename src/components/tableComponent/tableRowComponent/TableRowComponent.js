import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatData} from '../../../utils/utils';
import {getHeadersLabels} from '../tableLabelComponent/TableLabelComponent';

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
                {renderValues(this.props.value, this.props.labels)}
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
    return getHeadersLabels(defs).map((value,index) => {
        return (<td className="table-cell" key={index}>{formatData(object[value.id], value.dataType)}</td>);
    });
}

TableRowComponent.propTypes = {
    value: PropTypes.object.isRequired,
    labels: PropTypes.object.isRequired,
    editAction: PropTypes.func.isRequired,
    removeAction: PropTypes.func.isRequired
};
