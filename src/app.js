import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Provider from 'react-redux/es/components/Provider';
import {store} from './reduxSettings/store';
import HomePage from './components/pages/home/HomePage';
import {LoginBar} from './components/pageElements/loginBar/LoginBar';
import ApplicationHeader from './components/pageElements/applicationHeader/ApplicationHeader';
import {ApplicationFooter} from './components/pageElements/applicationFooter/ApplicationFooter';
import {ItemsPage} from './components/pages/items/ItemsPage';
import {ClientsPage} from './components/pages/clients/ClientsPage';
import {DocumentsPage} from './components/pages/documents/DocumentsPage';
import CompanyDetailsPage from './components/pages/companyDetails/CompanyDetailsPage';
import {OtherTablesPage} from './components/pages/otherTables/OtherTablesPage';
import {DocumentDetailsPage} from './components/pages/documentDetails/DocumentDetailsPage';
import {ItemDetailsPage} from './components/pages/itemDetails/ItemDetailsPage';
import {ClientDetailsPage} from './components/pages/clientDetails/ClientDetailsPage';

ReactDOM.render(
    <Provider store={store}>
        <Router hashType="slash">
            <React.Fragment>
                <LoginBar/>
                <ApplicationHeader/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/items/">
                        <ItemsPage/>
                    </Route>
                    <Route path="/clients/">
                        <ClientsPage/>
                    </Route>
                    <Route path="/company-details/">
                        <CompanyDetailsPage/>
                    </Route>
                    <Route path="/other/">
                        <OtherTablesPage/>
                    </Route>
                    <Route path="/documents/">
                        <DocumentsPage/>
                    </Route>
                    <Route path="/documentDetails/:documentID" component={DocumentDetailsPage} />
                    <Route path="/itemDetails/:itemID" component={ItemDetailsPage} />
                    <Route path="/clientDetails/:clientID" component={ClientDetailsPage} />
                </Switch>
                <ApplicationFooter/>
            </React.Fragment>
        </Router>
    </Provider>,
    document.getElementById('App'));
