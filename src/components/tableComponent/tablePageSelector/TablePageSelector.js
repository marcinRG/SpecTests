import React from 'react';
import PropTypes from 'prop-types';
import './TablePageSelector.scss';

export function TablePageSelector(props) {
    const onClick = () => {
        props.action();    };
    return (
        <div className="page-selector">
            <span onClick={onClick}>&rarr;</span>
            <ul>
                {createPages(getPageNumber(props.count, props.itemsPerPage), props.selectedPage, props.action)}
            </ul>
        </div>
    );
}

function createPage(i, selected, action) {
    const onClick = () => {
        action(i);
    };
    return (<li key={i} className={getClassName(i, selected)} onClick={onClick}>{i}</li>);
}

function createPages(pageNumber, selected, action) {
    let pages = [];
    if (pageNumber > 0) {
        for (let i = 0; i < pageNumber; i++) {
            pages.push(createPage(i + 1, selected, action));
        }
    }
    return pages;
}

function getClassName(i, selected) {
    if (i === selected) {
        return 'active'
    }
    return '';
}

export function getPageNumber(count, itemsPerPage) {
    if (count > itemsPerPage) {
        return Math.ceil(count / itemsPerPage);
    }
    return 1;
}

TablePageSelector.propTypes = {
    action: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
};
