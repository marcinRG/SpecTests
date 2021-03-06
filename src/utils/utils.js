import {dataTypes} from './dataTypes';

export function getElementClass(check, className, classAdditionalText) {
    if (check) {
        return `${className} ${classAdditionalText}`;
    }
    return className;
}

export function getDateString(dateAsString, separator) {
    if (validDate(dateAsString)) {
        const newDate = new Date(dateAsString);
        const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(newDate);
        const month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(newDate);
        const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(newDate);
        return `${year}${separator}${month}${separator}${day}`;
    }
}

export function validDate(dateAsString) {
    return (dateAsString && !Number.isNaN(Date.parse(dateAsString)));
}

export function objectIsNotEmpty(obj) {
    if (obj && (Object.keys(obj).length !== 0)) {
        return true;
    }
    return false;
}

export function objectPropertiesToArray(object) {
    let values = [];
    if (object) {
        values = Object.values(object);
    }
    return values;
}

export function valuesAsObjectToArray(object) {
    const keys = Object.keys(object);
    return keys.map((key) => {
        return {
            ...object[key], id: key,
        };
    });
}

export function formatData(value, dataType) {
    switch (dataType) {
        case dataTypes.DATE: {
            return getDateString(value, '-');
        }
        case dataTypes.STRING: {
            return value;
        }
        case dataTypes.NUMBER: {
            return value + '';
        }
    }
}

export function isFieldValid(fieldName, validationObject) {
    if (validationObject && validationObject.hasOwnProperty(fieldName)) {
        return validationObject[fieldName];
    }
    return true;
}

export function isFormValid(validationObject) {
    let isValid = true;
    if (validationObject) {
        const keys = Object.keys(validationObject);
        if (keys.length > 0) {
            keys.forEach(key => {
                isValid = isValid && validationObject[key];
            });
        }
    }
    return isValid;
}

export function isNumber(str) {
    if (str && !Number.isNaN(Number.parseFloat(str))) {
        return true;
    }
    return false;
}

export function isDataValid(value, dataType) {
    switch (dataType) {
        case dataTypes.DATE: {
            return validDate(value + '');
        }
        case dataTypes.STRING: {
            let str = value + '';
            return str.length > 0;
        }
        case dataTypes.NUMBER: {
            return isNumber(value + '');
        }
        case dataTypes.OBJECT: {
            let str = value + '';
            return (str.includes('object'));
        }
        default: {
            return false;
        }
    }
}

export function setValue(value, fieldName, obj) {
    if (obj && obj.hasOwnProperty(fieldName)) {
        const newValue = {...obj};
        newValue[fieldName] = value;
        return newValue;
    }
}

//from https://www.jacklmoore.com/notes/rounding-in-javascript/
export function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

export function sortArrayByMultipleColumns(array, sortParams) {
    return array;
}
