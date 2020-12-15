import './DatePicker.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {months} from '../../../data/monthAndDaysTables';
import {DayHeaderRow} from './DayHeaderRow';
import {DatePickerCell} from './DatePickerCell';
import {getDateString, getElementClass, isDataValid, validDate} from '../../../utils/utils';
import {fieldState} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

export class DatePicker extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            showItems: false,
            date: date,
            isError: false,
        }

        this.changeValue = this.changeValue.bind(this);
        this.toggleItemsList = this.toggleItemsList.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.setDate = this.setDate.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
    }

    changeValue(date) {
        this.props.changeValue(date);
    }

    toggleItemsList(event) {
        event.preventDefault();
        this.setState({showItems: !this.state.showItems});
    }

    changeSelectedDate(event) {
        event.preventDefault();
        const isDateValid = validDate(event.target.value);

        const newState = {
            date: this.state.date,
            isError: !isDateValid
        }

        if (isDateValid) {
            newState.date = new Date(event.target.value);
        }
        this.changeValue({
            fieldName: this.props.propertyName,
            value: event.target.value,
            isValid: isDateValid
        });
        this.setState({...newState});
    }

    setDate(day) {
        const tempDate = new Date(this.state.date.toString());
        tempDate.setDate(day);
        const dateAsString = getDateString(tempDate.toString(), '-');

        this.changeValue({
            fieldName: this.props.propertyName,
            value: dateAsString,
            isValid: true
        });

        this.setState({
            dateSelected: dateAsString,
            isError: false,
            showItems: false
        });
    }

    changeMonth(event) {

        let month = this.state.date.getMonth();
        const operation = event.target.getAttribute('data-operation');
        if (operation === 'down') {
            month = month - 1;
        } else {
            month = month + 1;
        }
        const year = this.state.date.getFullYear();
        const tempDate = new Date(year, month, 1);
        this.setState({
            date: tempDate
        });
    }

    render() {
        return (
            <div className="datepicker-input">
                <label className="input-label">{this.props.labels.labelName}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={getValue(this.props.value)}
                           onChange={this.changeSelectedDate}/>
                    <button className="input-btn" onClick={this.toggleItemsList}><span>&#128198;</span></button>
                </div>
                <div className={getElementClass(this.state.showItems, 'date-picker', 'show')}>
                    <div className="month-selection">
                        <button className="prev-btn" onClick={this.changeMonth} data-operation={'down'}>
                            <span>&#9664;</span></button>
                        <span className="month-display">
                            {this.state.date.getFullYear() + ' ' + getMonthNames(months, this.state.date.getMonth())}
                        </span>
                        <button className="next-btn" onClick={this.changeMonth} data-operation={'up'}>
                            <span> &#9658;</span></button>
                    </div>
                    <table className="days-table">
                        <thead>
                        <DayHeaderRow cellClassName={'cell-header'} isDaysShort={false}/>
                        </thead>
                        <tbody>
                        {createTableRows(6, 7, createDaysOfMonth(this.state.date), this.setDate)}
                        </tbody>
                    </table>
                </div>
                {/*{this.state.isError &&*/}
                {/*<div className="error-msg">*/}
                {/*    <span className="error-txt">This is some random error message!!!</span>*/}
                {/*</div>}*/}

            </div>
        )
    }
}

DatePicker.propTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func,
    fieldStates: PropTypes.object,
    labels: PropTypes.object,
    propertyName: PropTypes.string
};


export function getValue(obj) {
    if (obj) {
        return getDateString(obj, '-');
    }
    return '';
}

function isValueOk(value, labelForField, additionalValidationFunction) {
    if (labelForField.required) {
        let isOk = isDataValid(value, labelForField.dataType);
        if (additionalValidationFunction) {
            isOk = isOk && additionalValidationFunction(value);
        }
        return isOk;
    }
    return true;
}

function fieldIsValid(value, propertyName, labelForField, fieldStates, additionalValidationFunction) {
    if (propertyName && fieldStates && labelForField) {
        const stateOfField = fieldStates[propertyName];
        if (stateOfField != fieldState.CLEAN) {
            return isValueOk(value, labelForField, additionalValidationFunction);
        }
    }
    return true;
}


function getMonthNames(monthsTable, index) {
    return monthsTable[index];
}

function lastDayOfPreviousMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}


function firstDayWeekOfMonth(date) {
    const dateTemp = new Date(date.getTime());
    dateTemp.setDate(1);
    return dateTemp.getDay();
}

function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function createDaysOfMonth(date) {
    const firstDay = firstDayWeekOfMonth(date);
    const daysInPrevious = lastDayOfPreviousMonth(date);
    const daysCount = daysInMonth(date);
    const maxValue = 6 * 7;
    let values = [];
    for (let i = 0; i < maxValue; i++) {
        if (i < firstDay) {
            values.push({
                day: daysInPrevious - firstDay + i + 1,
                enabled: false
            });
        }
        if (i >= firstDay && i < (daysCount + firstDay)) {
            values.push({
                day: i - firstDay + 1,
                enabled: true
            });
        }
        if (i >= (daysCount + firstDay)) {
            values.push({
                day: i - (daysCount + firstDay) + 1,
                enabled: false
            });
        }
    }
    return values;
}

function createTableRows(maxHeight, maxWidth, daysTable, action) {
    let rows = [];
    if (daysTable.length > 0) {
        for (let i = 0; i < maxHeight; i++) {
            rows.push(<tr key={i}>{createTableCells(i, maxWidth, daysTable, action)}</tr>)
        }
    }
    return rows;
}

function createTableCells(row, maxWidth, daysTable, action) {
    let cells = [];
    for (let i = 0; i < maxWidth; i++) {
        const id = row * maxWidth + i;
        const val = daysTable[id];
        cells.push(<DatePickerCell key={id} value={val.day} cellClass={'cell-day'} isEnabled={val.enabled}
                                   action={action}/>);
    }
    return cells;
}
