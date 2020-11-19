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
        addNew: () => {
            console.log('not implemented');
        },
        changeValue: () => {
            console.log('not implemented');
        },
        removeValue: () => {
            console.log('not implemented');
        }
    }
}

const SimplifiedInvoiceTypes = connect(mapStateToProps, mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedInvoiceTypes;
