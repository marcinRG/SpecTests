import {describe, it, expect} from '@jest/globals';
import {formatData, getDateString, validDate} from '../src/utils/utils';
import {dataTypes} from '../src/utils/dataTypes';

describe('Data formatting functions test',()=>{
    it('validDate should return expected values',()=>{
        let dateAsString = '2020-05-12';
        expect(validDate(dateAsString)).toBe(true);
        dateAsString = '2020.22.22';
        expect(validDate(dateAsString)).toBe(false);
        dateAsString = '2020.05.22';
        expect(validDate(dateAsString)).toBe(true);
        dateAsString='2020-03-17T11:32:38.000Z';
        expect(validDate(dateAsString)).toBe(true);
    });
    it('getDateString should return expected values',()=>{
        let dateAsString = '2020-05-12';
        expect(getDateString(dateAsString,'-')).toBe('2020-05-12');
        dateAsString = '2020/05/12';
        expect(getDateString(dateAsString,'.')).toBe('2020.05.12');
        dateAsString='2020-03-17T11:32:38.000Z';
        expect(getDateString(dateAsString,'-')).toBe('2020-03-17');
    });
    it('formatData should return expected values',()=>{
        let dateAsString = '2020-03-17T11:32:38.000Z';
        expect(formatData(dateAsString,dataTypes.DATE)).toBe('2020-03-17');
        dateAsString = '2020-01-20T11:32:38.000Z';
        expect(formatData(dateAsString,dataTypes.DATE)).toBe('2020-01-20');
        let str = 'Costam costam';
        expect(formatData(str,dataTypes.STRING)).toBe(str);
        let num = 2356.33;
        expect(formatData(num,dataTypes.NUMBER)).toBe('2356.33');
    });
});
