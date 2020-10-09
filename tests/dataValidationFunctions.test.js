import {describe, it, expect} from '@jest/globals';
import {dataTypes} from '../src/utils/dataTypes';
import {isDataValid} from '../src/utils/utils';

describe('Data validation functions test',()=>{
    it('isDataValid should return expected values',()=>{
        let valueAsText='0';
        expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(true);
        valueAsText='zy';
        expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(false);
        valueAsText='';
        expect(isDataValid(valueAsText,dataTypes.STRING)).toBe(false);
        valueAsText=' ';
        expect(isDataValid(valueAsText,dataTypes.STRING)).toBe(true);
        valueAsText='2020-05-12';
        expect(isDataValid(valueAsText,dataTypes.DATE)).toBe(true);
    });

});
