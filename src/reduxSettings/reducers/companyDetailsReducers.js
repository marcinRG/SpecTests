import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function companyDetailsReducers(state = InitData.companyDetails, action) {
    switch (action.type) {
        case actionNames.CHANGE_COMPANY_DETAILS: {
            return Object.assign({}, state, {companyDetails: action.value});
        }
        default: {
            return state;
        }
    }
}
