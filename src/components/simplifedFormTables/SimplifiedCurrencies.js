import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.currencies.data,
        labels: state.additionalTables.currencies.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_CURRENCY_VALUE,
                value: obj
            })
        },
        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_CURRENCY_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedCurrencies = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedCurrencies;
