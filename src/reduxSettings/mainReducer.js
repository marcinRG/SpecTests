import {combineReducers} from 'redux';
import {appStateReducers} from './reducers/appStateReducers';
import {companyDetailsReducers} from './reducers/companyDetailsReducers';

const mainReducer = combineReducers({
        appState: appStateReducers,
        companyDetails: companyDetailsReducers
    }
);

export default mainReducer;
