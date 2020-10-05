import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.unitsOfMeasurement.data,
        labels: state.additionalTables.unitsOfMeasurement.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_UNITS_VALUE,
                value: obj
            })
        },
        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_UNITS_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedUnitsOfMeasurements = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedUnitsOfMeasurements;
