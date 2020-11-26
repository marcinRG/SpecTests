import {InitData} from '../../data/initData';
import {actionNames} from '../constants';

export function additionalTablesReducers(state = InitData.additionalTables, action) {
    switch (action.type) {
        //tax rates
        case actionNames.ADD_TAX_RATE:
        case actionNames.CHANGE_TAX_RATE_VALUE: {
            return {...state, taxRates: {...state.taxRates, data: changeData(action,state.taxRates)}};
        }
        case actionNames.REMOVE_TAX_RATE_VALUE: {
            return {...state, taxRates: {...state.taxRates, data: removeData(action,state.taxRates)}};
        }

        //cars
        case actionNames.ADD_CAR:
        case actionNames.CHANGE_CARS_VALUE: {
            return {...state, cars: {...state.cars, data: changeData(action,state.cars)}};
        }
        case actionNames.REMOVE_CARS_VALUE: {
            return {...state, cars: {...state.cars, data: removeData(action,state.cars)}};
        }

        //text additions
        case actionNames.ADD_TEXT_ADDITION:
        case actionNames.CHANGE_TEXT_ADDITION_VALUE: {
            return {...state, textAdditions: {...state.textAdditions, data: changeData(action,state.textAdditions)}};
        }
        case actionNames.REMOVE_TEXT_ADDITION_VALUE: {
            return {...state, textAdditions: {...state.textAdditions, data: removeData(action,state.textAdditions)}};
        }

        //currencies
        case actionNames.ADD_CURRENCY_VALUE:
        case actionNames.CHANGE_CURRENCY_VALUE: {
            return {...state, currencies: {...state.currencies, data: changeData(action,state.currencies)}};
        }
        case actionNames.REMOVE_CURRENCY_VALUE: {
            return {...state, currencies: {...state.currencies, data: removeData(action,state.currencies)}};
        }

        //method of payments
        case actionNames.ADD_PAYMENTS_METHODS:
        case actionNames.CHANGE_PAYMENTS_METHODS_VALUE: {
            return {...state, methodsOfPayments: {...state.methodsOfPayments, data: changeData(action,state.methodsOfPayments)}};
        }
        case actionNames.REMOVE_PAYMENTS_METHODS_VALUE: {
            return {...state, methodsOfPayments: {...state.methodsOfPayments, data: removeData(action,state.methodsOfPayments)}};
        }

        //units of measurements
        case actionNames.ADD_UNIT:
        case actionNames.CHANGE_UNITS_VALUE: {
            return {...state, unitsOfMeasurement: {...state.unitsOfMeasurement, data: changeData(action,state.unitsOfMeasurement)}};
        }
        case actionNames.REMOVE_UNITS_VALUE: {
            return {...state, unitsOfMeasurement: {...state.unitsOfMeasurement, data: removeData(action,state.unitsOfMeasurement)}};
        }

        default: {
            return state;
        }
    }
}

function changeData(action, table) {
    let newData = {...table.data};
    if (action.value.id) {
        newData[action.value.id] = action.value.item;
    }
    return newData;
}

function removeData(action, table) {
    let newData = {...table.data};
    delete newData[action.value.id];
    return newData;
}
