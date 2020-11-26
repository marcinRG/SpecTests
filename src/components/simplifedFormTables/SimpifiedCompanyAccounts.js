import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.company.accounts.data,
        labels: state.company.accounts.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNew: (obj) => {
            dispatch({
                type: actionNames.ADD_COMPANY_ACCOUNT,
                value: obj
            })
        },

        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_COMPANY_ACCOUNT_VALUE,
                value: obj
            })
        },

        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_COMPANY_ACCOUNT_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedCompanyAccounts = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedCompanyAccounts;
