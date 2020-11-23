import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function documentsReducers(state = InitData.documents, action) {
    switch (action.type) {
        case actionNames.CHANGE_SORT_METHOD_DOCUMENTS: {
            console.log('documents reducer');
            // let newLabels = [...state.labels];
            // newLabels[action.value.index] = action.value.newValue;
            // return {...state, labels: newLabels};
            return state;
        }
        case actionNames.SHOW_MESSAGE_DOCUMENTS: {
            // let newValue = {...state.settings, messageVisible: action.value.visible}
            // return {...state, settings: newValue};
            return state;
        }

        case actionNames.CHANGE_PAGE_DOCUMENTS: {
            // let newValue = {...state.settings,currentPage: action.value.page}
            // return {...state, settings: newValue};
            return state;
        }

        default: {
            return state;
        }
    }
}
