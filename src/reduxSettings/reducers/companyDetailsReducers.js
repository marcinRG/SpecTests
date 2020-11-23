import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function companyDetailsReducers(state = InitData.company, action) {
    switch (action.type) {
        case actionNames.CHANGE_COMPANY_DETAILS: {
            console.log('company reducer');
            //return {...state,companyDetails: action.value};
            return state;
        }
        default: {
            return state;
        }
    }
}
