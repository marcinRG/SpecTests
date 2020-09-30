import './Tabs.scss';
import React from 'react';
import Proptypes from 'prop-types';

export function Tabs(props) {
    return (
        <div className={'tabs'}>
            {props.children}
        </div>
    )
}

Tabs.propTypes = {
    children: Proptypes.array
}
