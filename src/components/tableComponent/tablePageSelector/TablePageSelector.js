import React from 'react';
import PropTypes from 'prop-types';
import './TablePageSelector.scss';

export function TablePageSelector(props) {
    const onClick = () => {
        props.action();
    };
    return (
        <React.Fragment>
            {props.numberOfPages>0 && <div className="page-selector">
                <span onClick={onClick}>&rarr;</span>
                <ul>
                    {createPages(props.numberOfPages, props.selectedPage, props.action)}
                </ul>
            </div>}
        </React.Fragment>
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

TablePageSelector.propTypes = {
    action: PropTypes.func.isRequired,
    numberOfPages: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
};
