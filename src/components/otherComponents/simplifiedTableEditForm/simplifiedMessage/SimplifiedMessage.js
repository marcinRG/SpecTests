import React from 'react';
import {PropTypes} from 'prop-types';
import './SimplifiedMessage.scss';

export function SimplifiedMessage(props) {
    return (
        <div className="simplified-message">
            <p className="message-txt">{props.message}</p>
            <div className="buttons-row">
                <button className="rounded-button white-inverted" onClick={(event)=>{
                    event.preventDefault();
                    props.removeAction();
                }}>
                    {props.buttonOKLabel}
                </button>
                <button className="rounded-button blue" onClick={(event)=>{
                    event.preventDefault();
                    props.cancelAction();
                }}>
                    {props.buttonCancelLabel}
                </button>
            </div>
        </div>
    );
}

SimplifiedMessage.propTypes = {
    buttonOKLabel: PropTypes.string,
    buttonCancelLabel: PropTypes.string,
    message: PropTypes.string,
    removeAction: PropTypes.func,
    cancelAction: PropTypes.func
}