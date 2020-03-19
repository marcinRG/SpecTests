import React from 'react';
import PropTypes from 'prop-types';
import {states} from './states';
import {TableItemsText} from './TableItemsText';
import './TableItemsCount.scss';

let labels = {};
labels[states.OK] = ['Showing', 'out of', 'items'];
labels[states.NO_RESULTS] = 'No results';
labels[states.WRONG_PAGE] = 'Wrong page';

export function TableItemsCount(props) {
    return (
        <div className="table-items-count">
            <TableItemsText state={getState(props)} count={props.count}
                        lower={getLowerMargin(props.selectedPage, props.itemsPerPage)}
                        upper={getUpperMargin(props.selectedPage, props.itemsPerPage, props.count)}
                        all={props.count}
                        labels={labels}
            />
        </div>
    );
}

function getLowerMargin(selectedPage, itemsPerPage) {
    return ((selectedPage - 1) * itemsPerPage) + 1;
}

function getUpperMargin(selectedPage, itemsPerPage, count) {
    const upper = ((selectedPage - 1) * itemsPerPage) + itemsPerPage;
    if (upper <= count) {
        return upper;
    }
    return count;
}

function getState(props) {
    if (props.count <= 0) {
        return states.NO_RESULTS;
    }
    if (props.count > 0) {
        if (props.count < (props.selectedPage - 1) * props.itemsPerPage) {
            return states.WRONG_PAGE;
        }
        return states.OK;
    }
}

TableItemsCount.propTypes = {
    count: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
};
