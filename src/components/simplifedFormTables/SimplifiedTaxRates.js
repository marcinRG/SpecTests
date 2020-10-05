import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.taxRates.data,
        labels: state.additionalTables.taxRates.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_TAX_RATE_VALUE,
                value: obj
            })
        },
        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_TAX_RATE_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedTaxRates = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedTaxRates;
