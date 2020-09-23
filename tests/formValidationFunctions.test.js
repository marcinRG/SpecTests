import {describe, it, expect} from '@jest/globals';
import {alwaysTrue, textNotEmpty} from '../src/utils/valideFunctions';
import {isFormValid, isFieldValid} from '../src/utils/utils';

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


});
