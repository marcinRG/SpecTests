import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.textAdditions.data,
        labels: state.additionalTables.textAdditions.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNew: (obj) => {
            dispatch({
                type: actionNames.ADD_TEXT_ADDITION,
                value: obj
            })
        },

        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_TEXT_ADDITION_VALUE,
                value: obj
            })
        },

        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_TEXT_ADDITION_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedTextAdditions = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedTextAdditions;
