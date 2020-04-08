import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ScreenMessage.scss';


export class ScreenMessage extends Component {

    constructor(props) {
        super(props);
        this.hrefFullScreen = React.createRef();
    }

    render() {
        return (
            <div className={setHeightAndClassName(this.props.isVisible, this.hrefFullScreen.current)}
                 ref={this.hrefFullScreen}>
                <div className="full-screen">
                    <div className="message">
                        <label className="message-label">{this.props.label}</label>
                        <div className="message-body">
                            <p className="message-txt">{this.props.message}</p>
                            <div className="buttons-row">
                                {createButtons(this.props.buttons, this.props.buttonLabels, this.props.action)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function createButtons(buttons, buttonLabels, action) {
    let createdButtons = [];
    buttons.forEach(button => {
        createdButtons.push(createButton(button, buttonLabels, action));
    });
    return createdButtons;
}

function createButton(buttonType, buttonLabels, action) {

    switch (buttonType) {
        case buttonTypes.OK_BUTTON: {
            const okAction = () => {
                action(buttonTypes.OK_BUTTON);
            };
            return (<button className="rounded-button white-inverted" key={buttonType} onClick={okAction}>
                {buttonLabels[buttonTypes.OK_BUTTON]}
            </button>)
        }
        case buttonTypes.CANCEL_BUTTON: {
            const cancelAction = () => {
                action(buttonTypes.CANCEL_BUTTON);
            };
            return (<button className="rounded-button blue" key={buttonType} onClick={cancelAction}>
                {buttonLabels[buttonTypes.CANCEL_BUTTON]}
            </button>)
        }
        case buttonTypes.YES_BUTTON: {
            const yesAction = () => {
                action(buttonTypes.YES_BUTTON);
            };
            return (<button className="rounded-button white-inverted" key={buttonType} onClick={yesAction}>
                {buttonLabels[buttonTypes.YES_BUTTON]}
            </button>)
        }
        case buttonTypes.NO_BUTTON: {
            const noAction = () => {
                action(buttonTypes.NO_BUTTON);
            };
            return (<button className="rounded-button blue" key={buttonType} onClick={noAction}>
                {buttonLabels[buttonTypes.NO_BUTTON]}
            </button>)
        }
    }
}

function setHeightAndClassName(isVisible, DOMelement) {
    let className = 'screen-msg';
    if (isVisible) {
        DOMelement.style.height = document.documentElement.offsetHeight + 'px';
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

export const buttonTypes = {
    OK_BUTTON: 'ok button',
    CANCEL_BUTTON: 'cancel button',
    YES_BUTTON: 'yes button',
    NO_BUTTON: 'no_button'
};
