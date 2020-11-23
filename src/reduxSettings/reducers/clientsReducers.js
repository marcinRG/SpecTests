import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function clientsReducers(state = InitData.clients, action) {
    switch (action.type) {

        case actionNames.CHANGE_SORT_METHOD_CLIENTS: {
            let newLabels = {...state.labels};
            newLabels[action.value.label] = action.value.newValue;
            return {...state,labels: newLabels};
        }

        case actionNames.SHOW_MESSAGE_CLIENTS: {
            let newValue = {...state.settings, messageVisible: action.value.visible}
            return {...state, settings: newValue};
        }

        case actionNames.CHANGE_CLIENT_DETAILS: {
            let newData = {...state.data};
            if (action.value.id) {
                newData[action.value.id] = action.value.client;
            }
            return {...state,data: newData};
        }

        default: {
            return state;
        }
    }
}