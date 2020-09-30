import './TabPanel.scss';
import React from 'react';
import {PropTypes} from 'prop-types';
import {getElementClass} from '../../../../utils/utils';

export function TabPanel(props) {
    const setClass = () => {
        return getElementClass((props.id === props.selected), 'tab-panel', 'selected');
    }

    return (
        <div className={setClass()}>
            {props.children}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.any,
    id: PropTypes.any,
    selected: PropTypes.any
}
