import React from 'react';
import {PropTypes} from 'prop-types';
import './SimplifiedMessage.scss';

export function SimplifiedMessage(props) {
    return (
        <div className="simplified-message">
            <p className="message-txt">{props.message}</p>
            <div className="buttons-row">
                <button className="rounded-button white-inverted">
                    {props.buttonOKLabel}
                </button>
                <button className="rounded-button blue">
                    {props.buttonCancelLabel}
                </button>
            </div>
        </div>
    );
}

SimplifiedMessage.propTypes = {
    id: PropTypes.string,
    buttonOKLabel: PropTypes.string,
    buttonCancelLabel: PropTypes.string,
    message: PropTypes.string,
    removeAction: PropTypes.func,
    cancelAction: PropTypes.func
}