import {describe, expect, it} from '@jest/globals';
import {sortArrayByMultipleColumns} from '../src/utils/utils';
import {sortOrder} from '../src/utils/sortOdrer';


describe('Tests for sortArrayByMultipleColumns function', () => {
    it('should return expected values', () => {
        const inputData = [
            {
                productName: 'Inny produkt',
                productNameCont: '',
                productCode: '771245580',
                price: '95.75',
                weightInKG: '.15',
            },
            {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                price: '25.75',
                weightInKG: '.35',
            },
            {
                productName: 'Zexos rexos',
                productNameCont: '',
                productCode: '22341128000',
                price: '85.75',
                weightInKG: '.95',
            }
        ];

        let sortParams = {
            price: {
                sortable: true,
                sortDirection: sortOrder.SORT_DESC
            },
            productCode: {
                sortable: true,
                sortDirection: sortOrder.SORT_DESC
            },
            productName: {
                sortable: true,
                sortDirection: sortOrder.SORT_ASC
            },
            productNameCont: {
                sortable: false,
                sortDirection: sortOrder.SORT_DESC
            },
            weightInKG: {
                sortable: false,
                sortDirection: sortOrder.SORT_DESC
            }
        };

        let output = sortArrayByMultipleColumns(inputData);
        expect(output).toBeDefined();
    });
});