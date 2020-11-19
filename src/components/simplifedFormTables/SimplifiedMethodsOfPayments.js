import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.methodsOfPayments.data,
        labels: state.additionalTables.methodsOfPayments.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNew: (obj) => {
            dispatch({
                type: actionNames.ADD_PAYMENTS_METHODS,
                value: obj
            })
        },

        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_PAYMENTS_METHODS_VALUE,
                value: obj
            })
        },

        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_PAYMENTS_METHODS_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedMethodsOfPayments = connect(mapStateToProps, mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedMethodsOfPayments;
