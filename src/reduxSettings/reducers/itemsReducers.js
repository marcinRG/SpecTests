import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function itemsReducers(state = InitData.products, action) {
    switch (action.type) {
        case actionNames.CHANGE_SORT_METHOD_ITEMS: {
            let newLabels = {...state.labels};
            newLabels[action.value.label] = action.value.newValue;
            return {...state,labels: newLabels};

        }
        case actionNames.SHOW_MESSAGE_ITEMS: {
            let newValue = {...state.settings, messageVisible: action.value.visible}
            return {...state, settings: newValue};
        }
        default: {
            return state;
        }
    }
}