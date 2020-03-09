import {actionNames} from '../constants';

export function changeCompanyDetails(value) {
    return {
        type: actionNames.CHANGE_COMPANY_DETAILS,
        value
    }
}
