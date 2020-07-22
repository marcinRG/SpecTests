import React from 'react';
import {PropTypes} from 'prop-types';
import {days, daysShort} from '../../../data/monthAndDaysTables';

export function DayHeaderRow(props) {
    return (
        <tr>
            {(getDaysTable(props.isDaysShort)).map((day, index) =>
                <td key={index} className={props.cellClassName}>{day}</td>
            )}
        </tr>
    );
}

DayHeaderRow.propTypes = {
    cellClassName: PropTypes.string.isRequired,
    isDaysShort: PropTypes.bool.isRequired
}

function getDaysTable(isDaysShort) {
    if (isDaysShort) {return daysShort}
    return days;
}