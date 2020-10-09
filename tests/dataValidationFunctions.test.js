import {describe, it, expect} from '@jest/globals';
import {dataTypes} from '../src/utils/dataTypes';
import {isDataValid, isNumber} from '../src/utils/utils';

describe('Data validation functions test',()=>{
    it('return true 1',()=>{
        let valueAsText='0';
        expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(true);
        valueAsText='zy';
        expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(false);
        valueAsText='';
        console.log(valueAsText.length);
        expect(isDataValid(valueAsText,dataTypes.STRING)).toBe(true);
        //valueAsText='2020-05-12';
        //expect(isDataValid(valueAsText,dataTypes.DATE)).toBe(true);
    });

    // it('return true 1',()=>{
    //     let valueAsText='0';
    //     expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(true);
    //     valueAsText='zy';
    //     expect(isDataValid(valueAsText,dataTypes.NUMBER)).toBe(false);
    // });
});
