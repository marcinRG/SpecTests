import {combineReducers} from 'redux';
import {appStateReducers} from './reducers/appStateReducers';
import {companyDetailsReducers} from './reducers/companyDetailsReducers';
import {documentsReducers} from './reducers/documentsReducers';

const mainReducer = combineReducers({
        appState: appStateReducers,
        companyDetails: companyDetailsReducers,
        documents: documentsReducers
    }
);

export default mainReducer;
