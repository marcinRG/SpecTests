import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ScreenMessage.scss';


export class ScreenMessage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={setClassName(this.props.isVisible)}>
                <div className="message">
                    <label className="message-label">Alert!</label>
                    <div className="message-body">
                        <p className="message-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium,
                            atque consequatur ea est et fugit laudantium, magni maiores nemo nulla odit quas qui quod?
                            Cum debitis natus ratione repellendus similique?</p>
                        <div className="buttons-row">
                            <button className="rounded-button blue" onClick={this.props.action}>Click here</button>
                            <button className="rounded-button white-inverted" onClick={this.props.action}>Click here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function setClassName(isVisible) {
    console.log(document.documentElement.getBoundingClientRect().height);
    let className = 'screen-msg';
    if (isVisible) {
        className = className + ' ' + 'visible';
    }
    return className;
}

ScreenMessage.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired
};
