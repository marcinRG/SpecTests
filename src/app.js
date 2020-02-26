import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './components/pages/home/HomePage';
import {LoginBar} from './components/pageElements/loginBar/LoginBar';
import {ApplicationHeader} from './components/pageElements/applicationHeader/ApplicationHeader';
import {ApplicationFooter} from './components/pageElements/applicationFooter/ApplicationFooter';

ReactDOM.render(
    <Router hashType="slash">
        <React.Fragment>
            <LoginBar/>
            <ApplicationHeader/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
            </Switch>
            <ApplicationFooter/>
        </React.Fragment>
    </Router>,
    document.getElementById('App'));
