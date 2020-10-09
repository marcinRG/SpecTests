import {describe, it, expect} from '@jest/globals';
import {alwaysTrue, textNotEmpty} from '../src/utils/valideFunctions';
import {isFormValid, isFieldValid, isNumber} from '../src/utils/utils';

describe('Form validation functions test',()=>{
    it('function alwaysTrue should always return true',()=>{
        let boolValue = alwaysTrue();
        expect(boolValue).toBe(true);
        boolValue = alwaysTrue(false);
        expect(boolValue).toBe(true);
    });

    it('function textNotEmpty should return true if text not empty',()=>{
        let txt = 'Something';
        let boolValue = textNotEmpty(txt);
        expect(boolValue).toBe(true);

        txt = undefined;
        boolValue = textNotEmpty(txt);
        expect(boolValue).toBe(false);

        txt = null;
        boolValue = textNotEmpty(txt);
        expect(boolValue).toBe(false);

        txt = '';
        boolValue = textNotEmpty(txt);
        expect(boolValue).toBe(false);

    });

    it('functions isFormValid, isFieldValid should return expected values',()=>{
        let validationObject = undefined;
        let fieldName = 'testField';

        expect(isFormValid(validationObject)).toBe(true);
        expect(isFieldValid(fieldName,validationObject)).toBe(true);

        validationObject = null;
        expect(isFormValid(validationObject)).toBe(true);
        expect(isFieldValid(fieldName,validationObject)).toBe(true);

        validationObject = {};
        expect(isFormValid(validationObject)).toBe(true);
        expect(isFieldValid(fieldName,validationObject)).toBe(true);

        validationObject = {
            'fieldOne': true,
            'fieldTwo': true,
        }

        expect(isFormValid(validationObject)).toBe(true);
        expect(isFieldValid('fieldOne',validationObject)).toBe(true);

        validationObject = {
            'fieldOne': false,
            'fieldTwo': true,
        }

        expect(isFormValid(validationObject)).toBe(false);
        expect(isFieldValid('fieldOne',validationObject)).toBe(false);

    });

    it('function isNumber should return true if str parameter is valid number',()=>{
        let str;
        expect(isNumber(str)).toBe(false);

        str = '';
        expect(isNumber(str)).toBe(false);
        str = '0';
        expect(isNumber(str)).toBe(true);
        str = '0.34';
        expect(isNumber(str)).toBe(true);
        str = '0.34f';
        expect(isNumber(str)).toBe(true);
        str = '123e-5'
        expect(isNumber(str)).toBe(true);
        str = '0x010101';
        expect(isNumber(str)).toBe(true);
        str = 'zy';
        expect(isNumber(str)).toBe(false);

    });


});
