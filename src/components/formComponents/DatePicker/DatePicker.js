import './DatePicker.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {months} from '../../../data/monthAndDaysTables';
import {DayHeaderRow} from './DayHeaderRow';
import {DatePickerCell} from './DatePickerCell';
import {getDateString, getElementClass, validDate} from '../../../utils/utils';

export class DatePicker extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            showItems: false,
            date: date,
            daysOfMonth: createDaysOfMonth(date),
            isError: false,
            dateSelected: ''
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
        const dateTxt = event.target.value;
        const isError = dateTxt !== '' ? !validDate(dateTxt) : false;
        this.changeValue(dateTxt);
        this.setState({
            dateSelected: dateTxt,
            isError
        });
    }

    setDate(day) {
        const tempDate = new Date(this.state.date.toString());
        tempDate.setDate(day);
        const dateAsString = getDateString(tempDate.toString(), '-');
        this.changeValue(dateAsString);

        this.setState({
            dateSelected: dateAsString,
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
            date: tempDate,
            daysOfMonth: createDaysOfMonth(tempDate)
        });
    }

    render() {
        return (
            <div className="datepicker-input">
                <label className="input-label">{this.props.labels.labelName}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={this.state.dateSelected}
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
                        {createTableRows(6, 7, this.state.daysOfMonth, this.setDate)}
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
