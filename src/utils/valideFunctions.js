import {isNumber} from './utils';

export function alwaysTrue() {
    return true;
}

export function textNotEmpty(txt) {
    if (txt && (typeof txt === 'string')) {
        return txt.length > 0;
    }
    return false;
}

export function textIsPCNNumber(txt) {
    const regEx = /^\d{10}$/gi;
    return regEx.test(txt);
}

export function numberBiggerThanZero(str) {
    return (isNumber(str) && Number.parseFloat(str) >= 0);
}

export function numberInRange(str, min, max) {
    return (isNumber(str) && Number.parseFloat(str) >= min && Number.parseFloat(str) <= max);
}

export function objectExistAndNotEmpty(obj) {
    return true;
}
