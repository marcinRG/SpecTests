import React from 'react';
import PropTypes from 'prop-types';
import './LabelComponent.scss';
import {sortOrder} from '../../../utils/sortOdrer';

export function LabelComponent(props) {

    const handleClick = () => {
        if (props.sortable) {
            props.action(props.labelField);
        }
    };

    return (
        <td className={getElementClass(props.sortable)} onClick={handleClick}>{props.labelName}
        <span>{getSortLabel(props.sortDirection)}</span>
        </td>
    )
}

function getElementClass(sortable) {
    if (sortable) {
        return 'header-cell sortable';
    }
    return 'header-cell';
}

function getSortLabel(sortDirection) {
    switch (sortDirection) {
        case sortOrder.SORT_ASC: {
           return (<React.Fragment>&darr;</React.Fragment>);
        }
        case sortOrder.SORT_DESC: {
           return (<React.Fragment>&uarr;</React.Fragment>);
        }
        default : {
            return (<React.Fragment>&darr;&uarr;</React.Fragment>);
        }
    }
}

LabelComponent.propTypes = {
    labelName: PropTypes.string,
    action: PropTypes.func.isRequired,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    labelField: PropTypes.string.isRequired
};
