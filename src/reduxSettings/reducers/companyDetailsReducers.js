import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function companyDetailsReducers(state = InitData.company, action) {
    switch (action.type) {
        case actionNames.CHANGE_COMPANY_DETAILS: {
            return {...state, data: action.value};
        }
        //company accounts
        case actionNames.ADD_COMPANY_ACCOUNT:
        case actionNames.CHANGE_COMPANY_ACCOUNT_VALUE: {

            const newData = {...state.accounts.data};
            newData[action.value.id] = action.value.item;
            return {...state, accounts: {...state.accounts, data: newData}};
        }

        case actionNames.REMOVE_COMPANY_ACCOUNT_VALUE: {
            const newData = {...state.accounts.data};
            delete newData[action.value.id];
            return {...state, accounts: {...state.accounts, data: newData}};
        }

        default: {
            return state;
        }
    }
}
