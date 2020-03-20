import React from 'react';
import PropTypes from 'prop-types';
import {states} from './states';

export function TableItemsText(props) {
    switch (props.state) {
        case states.OK: {
            return (
                <div className="text-element">
                    <span className="text-label-element">{props.labels[states.OK][0]}</span>
                    <span className="number-label-element">
                        {props.lower} - {props.upper}
                    </span>
                    <span className="text-label-element">{props.labels[states.OK][1]}</span>
                    <span className="number-label-element">{props.all}</span>
                    <span className="text-label-element">{props.labels[states.OK][2]}</span>
                </div>);
        }
        case states.NO_RESULTS: {
            return (<span>{props.labels[states.NO_RESULTS]}</span>);
        }
        case states.WRONG_PAGE: {
            return (<span>{props.labels[states.WRONG_PAGE]}</span>);
        }
        default:
            return (<span></span>)
    }
}

TableItemsText.propTypes = {
    state: PropTypes.string.isRequired,
    lower: PropTypes.number.isRequired,
    upper: PropTypes.number.isRequired,
    all: PropTypes.number.isRequired,
    labels: PropTypes.object.isRequired,
};

