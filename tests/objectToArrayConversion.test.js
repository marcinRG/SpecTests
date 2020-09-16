import {objectPropertiesToArray, valuesAsObjectToArray} from '../src/utils/utils';
import {describe, it} from '@jest/globals';


describe('Object coversion to Array functions tests', () => {
    it('function objectPropertiesToArray should return empty array if object has no properties', () => {
        const obj = {};
        expect(obj).not.toBe(null);
        let output = objectPropertiesToArray(obj);
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toBe(0);
    });

    it('function objectPropertiesToArray should return valid values', () => {
        const obj = {
            '1': {
                date: '2020-03-17T11:32:38.000Z',
                document_nr: '203455/30',
                document_sum: 2457.12
            },
            '2': {
                date: '2019-12-17T11:32:38.000Z',
                document_nr: '203455/95',
                document_sum: 125.30
            },
            '3': {
                date: '2020-01-2011:32:38.000Z',
                document_nr: '203455/12',
                document_sum: 8825.73
            }
        };
        expect(obj).not.toBe(null);
        let output = objectPropertiesToArray(obj);
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toBe(3);
    });

    it('function valuesAsObjectToArray should return valid values', () => {
        const obj = {
            '1': {
                date: '2020-03-17T11:32:38.000Z',
                document_nr: '203455/30',
                document_sum: 2457.12
            },
            '2': {
                date: '2019-12-17T11:32:38.000Z',
                document_nr: '203455/95',
                document_sum: 125.30
            },
            '3': {
                date: '2020-01-2011:32:38.000Z',
                document_nr: '203455/12',
                document_sum: 8825.73
            }
        };
        expect(obj).not.toBe(null);
        let output = valuesAsObjectToArray(obj);
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toBe(3);
        let val = output[0];
        expect(val.id).toBe('1');
        expect(val.date).toBe('2020-03-17T11:32:38.000Z');
        expect(val.document_nr).toBe('203455/30');
        expect(val.document_sum).toBe(2457.12);
    });

    it('function valuesAsObjectToArray should return empty', () => {
        const obj = {
        };
        expect(obj).not.toBe(null);
        let output = valuesAsObjectToArray(obj);
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toBe(0);
    });
});
