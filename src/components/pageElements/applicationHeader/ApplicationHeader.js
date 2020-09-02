import './ApplicationHeader.scss';
import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {LinkList} from '../linkList/LinkList';
import PropTypes from 'prop-types';

class ApplicationHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header className="app-header">
                    <nav className="app-navbar">
                        <h1 className="app-title">Spec app</h1>
                        <button className="menu-button"></button>
                        <ul className="app-main-menu">
                            <LinkList/>
                        </ul>
                    </nav>

                    <div className={setJumbotronClass(this.props.showJumbotron)}>
                        <h1 className="big-title">Make something valuable</h1>
                        <p className="app-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Necessitatibus nisi
                            unde voluptate. Doloribus explicabo id optio saepe veniam. Aperiam atque dicta expedita
                            fugit
                            maxime
                            mollitia, sunt vitae. Atque consequatur, ducimus.</p>
                        <button className="rounded-button white button-spacing">Get Started</button>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

function setJumbotronClass(value) {
    if (value) {
        return 'app-jumbotron visible';
    }
    return 'app-jumbotron';
}

ApplicationHeader.propTypes = {
    showJumbotron: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        showJumbotron: state.appState.showApplicationJumbotron
    }
}

export default connect(mapStateToProps)(ApplicationHeader);
