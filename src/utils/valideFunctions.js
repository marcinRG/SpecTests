export function alwaysTrue() {
    return true;
}

export function textNotEmpty(txt) {
    if (txt && (typeof txt ==='string')) {
        return txt.length>0;
    }
    return false;
}

export function numberBiggerThanZero(num) {
    return (!Number.isNaN(num) && Number.parseFloat(num)>=0);
}
