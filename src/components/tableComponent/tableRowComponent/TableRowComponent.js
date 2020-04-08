import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TableRowComponent extends Component {
    constructor(props) {
        super(props);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    editItem() {
        this.props.editAction(this.props.id);
    }

    removeItem() {
        this.props.removeAction(this.props.id);
    }

    render() {
        return (
            <tr>
                <td className="table-cell">{getDateAsString(this.props.date, '-')}</td>
                <td className="table-cell">{this.props.number}</td>
                <td className="table-cell">{this.props.total}</td>
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

function getDateAsString(dateAsString, separator) {
    const date = getDateFromString(dateAsString);
    return `${date.getFullYear()}${separator}${formatNumbers(date.getMonth() + 1)}${separator}${formatNumbers(date.getDate())}`;
}

function validateDate(dateAsString) {
    return (dateAsString && Date.parse(dateAsString) !== Number.NaN);
}

function getDateFromString(dateAsString) {
    if (validateDate(dateAsString)) {
        return new Date(dateAsString);
    }
}

function formatNumbers(n) {
    const str = n + '';
    return str.length > 1 ? str : '0' + str;
}


TableRowComponent.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    editAction: PropTypes.func.isRequired,
    removeAction: PropTypes.func.isRequired
};
