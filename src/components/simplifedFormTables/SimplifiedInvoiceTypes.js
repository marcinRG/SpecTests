import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.invoiceType.data,
        labels: state.additionalTables.invoiceType.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_INVOICE_TYPE_VALUE,
                value: obj
            })
        },
        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_INVOICE_TYPE_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedInvoiceTypes = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedInvoiceTypes;
