import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TableRowComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="table-cell">{getDateAsString(this.props.date,'-')}</td>
                <td className="table-cell">{this.props.number}</td>
                <td className="table-cell">{this.props.total}</td>
                <td className="table-cell"><button className="table-button">Edit</button>
                    <button className="table-button">Remove</button></td>
            </tr>
        );
    }
}

function getDateAsString(dateAsString, separator) {
    const date = new Date(dateAsString);
    return `${date.getFullYear()}${separator}${formatNumbers(date.getMonth())}${separator}${formatNumbers(date.getDay())}`;
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
    date: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
};
