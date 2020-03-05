import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function appStateReducers(state = InitData.appState, action) {
    switch (action.type) {
        case actionNames.TOGGLE_APP_JUMBOTRON_VISIBILITY: {
            return Object.assign({}, state);
        }
        default: {
            return state;
        }
    }
}
