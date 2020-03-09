import {actionNames} from '../constants';

export function changeJumbotronVisibility(value) {
    return {
        type: actionNames.CHANGE_APP_JUMBOTRON_VISIBILITY,
        value
    }
}

export function toggleJumbotronVisibility(value) {
    return {
        type: actionNames.TOGGLE_APP_JUMBOTRON_VISIBILITY,
        value
    }
}
