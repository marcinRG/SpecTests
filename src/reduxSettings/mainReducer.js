import {combineReducers} from 'redux';
import {appStateReducers} from './reducers/appStateReducers';

const mainReducer = combineReducers({
        appState: appStateReducers
    }
);

export default mainReducer;
