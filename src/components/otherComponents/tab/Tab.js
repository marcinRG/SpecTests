import './Tab.scss';
import React from 'react';
import {PropTypes} from 'prop-types';
import {getElementClass} from '../../../utils/utils';

export function Tab(props) {
    const setClass = () => {
        return getElementClass((props.id === props.selected), 'tab', 'selected');
    }

    const doAction = () => {
        props.action(props.id)
    }

    return (
        <span className={setClass()} onClick={doAction}>
            {props.text}
        </span>
    )
}

Tab.propTypes = {
    action: PropTypes.func,
    text: PropTypes.string,
    id: PropTypes.any,
    selected: PropTypes.any
}
