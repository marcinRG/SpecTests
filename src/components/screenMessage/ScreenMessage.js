import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ScreenMessage.scss';


export class ScreenMessage extends Component {

    constructor(props) {
        super(props);
        this.okAction = this.okAction.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
        this.yesAction = this.yesAction.bind(this);
        this.noAction = this.noAction.bind(this);
    }

    okAction() {
        this.props.action(buttonTypes.OK_BUTTON);
    }

    cancelAction() {
        this.props.action(buttonTypes.CANCEL_BUTTON);
    }

    yesAction() {
        this.props.action(buttonTypes.YES_BUTTON);
    }

    noAction() {
        this.props.action(buttonTypes.NO_BUTTON);
    }

    render() {
        return (
            <div className={setClassName(this.props.isVisible)}>
                <div className="message">
                    <label className="message-label">{this.props.label}</label>
                    <div className="message-body">
                        <p className="message-txt">{this.props.message}</p>
                        <div className="buttons-row">
                            {createButtons(this.props.buttons,this.props.buttonLabels)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function createButtons(buttons, buttonLabels) {
    let createdButtons = [];
    buttons.forEach(button => {
        createdButtons.push(createButton(button,buttonLabels));
    });
    return createdButtons;
}

function createButton(buttonType, buttonLabels) {
    switch (buttonType) {
        case buttonTypes.OK_BUTTON: {
            return (<button className="rounded-button white-inverted" onClick={this.okAction}>
                {buttonLabels[buttonTypes.OK_BUTTON]}
            </button>)
        }
        case buttonTypes.CANCEL_BUTTON: {
            return (<button className="rounded-button blue" onClick={this.cancelAction}>
                {buttonLabels[buttonTypes.CANCEL_BUTTON]}
            </button>)
        }
        case buttonTypes.YES_BUTTON: {
            return (<button className="rounded-button white-inverted" onClick={this.yesAction}>
                {buttonLabels[buttonTypes.YES_BUTTON]}
            </button>)
        }
        case buttonTypes.NO_BUTTON: {
            return (<button className="rounded-button blue" onClick={this.noAction}>
                {buttonLabels[buttonTypes.NO_BUTTON]}
            </button>)
        }
    }
}

function setClassName(isVisible) {
    //console.log(document.documentElement.getBoundingClientRect().height);
    let className = 'screen-msg';
    if (isVisible) {
        className = className + ' ' + 'visible';
    }
    return className;
}

ScreenMessage.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    msgType: PropTypes.string,
    buttons: PropTypes.array,
    buttonLabels: PropTypes.object,
};

const buttonTypes = {
    OK_BUTTON: 'ok button',
    CANCEL_BUTTON: 'cancel button',
    YES_BUTTON: 'yes button',
    NO_BUTTON: 'no_button'
};
