import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function itemsReducers(state = InitData.products, action) {
    switch (action.type) {
        case actionNames.CHANGE_SORT_METHOD: {
            let newLabels = [...state.labels];
            newLabels[action.value.index] = action.value.newValue;
            return {...state,labels: newLabels};
        }
        case actionNames.SHOW_MESSAGE: {
            let newValue = {...state.settings, messageVisible: action.value.visible}
            return {...state, settings: newValue};
        }
        default: {
            return state;
        }
    }
}