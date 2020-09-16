import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function documentsReducers(state = InitData.documents, action) {
    switch (action.type) {
        case actionNames.CHANGE_SORT_METHOD: {
            let newLabels = [...state.labels];
            newLabels[action.value.index] = action.value.newValue;
            return {...state,labels: newLabels};
        }
        default: {
            return state;
        }
    }
}
