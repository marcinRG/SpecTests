import {combineReducers} from 'redux';
import {appStateReducers} from './reducers/appStateReducers';
import {companyDetailsReducers} from './reducers/companyDetailsReducers';
import {documentsReducers} from './reducers/documentsReducers';
import {itemsReducers} from './reducers/itemsReducers';
import {clientsReducers} from './reducers/clientsReducers';

const mainReducer = combineReducers({
        appState: appStateReducers,
        company: companyDetailsReducers,
        documents: documentsReducers,
        products: itemsReducers,
        clients: clientsReducers
    }
);

export default mainReducer;
