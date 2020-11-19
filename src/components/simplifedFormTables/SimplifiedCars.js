import {connect} from 'react-redux';
import {actionNames} from '../../reduxSettings/constants';
import {SimplifiedTableEditForm} from '../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

function mapStateToProps(state) {
    return {
        data: state.additionalTables.cars.data,
        labels: state.additionalTables.cars.labels,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNew: (obj) => {
            dispatch({
                type: actionNames.ADD_CAR,
                value: obj
            })
        },

        changeValue: (obj) => {
            dispatch({
                type: actionNames.CHANGE_CARS_VALUE,
                value: obj
            })
        },

        removeValue: (obj) => {
            dispatch({
                type: actionNames.REMOVE_CARS_VALUE,
                value: obj
            })
        }
    }
}

const SimplifiedCars = connect(mapStateToProps,mapDispatchToProps)(SimplifiedTableEditForm);

export default SimplifiedCars;
