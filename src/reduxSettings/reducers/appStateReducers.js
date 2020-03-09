import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function appStateReducers(state = InitData.appState, action) {
    switch (action.type) {
        case actionNames.TOGGLE_APP_JUMBOTRON_VISIBILITY: {
            return Object.assign({}, state, {showApplicationJumbotron: !state.showApplicationJumbotron});
        }
        case actionNames.CHANGE_APP_JUMBOTRON_VISIBILITY: {
            return Object.assign({}, state, {showApplicationJumbotron: action.value});
        }
        default: {
            return state;
        }
    }
}
