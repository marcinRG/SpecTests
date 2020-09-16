import {dataTypes} from '../utils/dataTypes';

export const InitData = {
    appState: {
        showApplicationJumbotron: false
    },
    company: {
        companyDetails: {
            companyName: 'AKME Incorporated',
            companyNameCont: '',
            addressStreet: 'Main Street 19A/12',
            addressCity: 'London',
            addressPostalCode: '23-569',
            vatUeNumber: 'GB 23450012',
        },
        accounts: [
            {
                id: 1,
                default: true,
                accountType: 'krajowe',
                swiftCodeAccount: 'PL XX 22 33',
                bankName: 'PKO BP',
                accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
            },
            {
                id: 2,
                default: false,
                accountType: 'zagraniczne',
                swiftCodeAccount: 'XW ZX GB LPP',
                bankName: 'Bank of Austria',
                accountNumber: ' GB 06 1189 0035 0000 0001 0056 9186'
            }
        ]
    },
    cars: [
        {
            id: 1,
            plateNo: 'DXC 2275',
            carName: 'Mercedes Vito'
        },
        {
            id: 2,
            plateNo: 'WBA 3381',
            carName: 'Mercedes Sprinter'
        },
        {
            id: 3,
            plateNo: 'AXB 125Q',
            carName: 'Fiat Ducato'
        },
    ],
    taxRates: [
        {
            id: 1,
            taxName: '0%',
            taxRate: 0
        },
        {
            id: 2,
            taxName: '5%',
            taxRate: 0.05
        },
        {
            id: 3,
            taxName: '8%',
            taxRate: 0.08
        },
        {
            id: 4,
            taxName: '23%',
            taxRate: 0.23
        },
        {
            id: 5,
            taxName: 'NP',
            taxRate: 0
        },
    ],
    methodsOfPayments: [
        {
            id: 1,
            payment: 'gotówka'
        },
        {
            id: 2,
            payment: 'przelew'
        }
    ],
    accountTypes: [
        {
            id: 1,
            description: 'krajowe'
        },
        {
            id: 2,
            description: 'zagraniczne'
        },
    ],
    textAdditions: [
        {
            id: 1,
            symbol: 'krajowe',
            text: 'Dziękujemy i zapraszamy ponownie',
        },
        {
            id: 2,
            symbol: 'zagraniczne',
            text: 'Podatek VAT od transakcji uiszcza nabywca',
            textCont: 'Dostawa wewnątrzwspólnotowa art. 41 i 42 ust. o VAT'
        }
    ],
    unitsOfMeasurement: [
        {
            id: 1,
            unit: 'szt',
        },
        {
            id: 2,
            unit: 'm'
        }
    ],
    currencies: [
        {
            id: 1,
            country: 'PL',
            currency: 'zł'
        },
        {
            id: 2,
            country: 'CZ',
            currency: 'kč'
        },
        {
            id: 3,
            country: 'DE',
            currency: '€'
        }

    ],
    invoiceType: [
        {
            id: 1,
            type: 'krajowa'
        },
        {
            id: 2,
            type: 'zagraniczna'
        }
    ],

    documents: {
        settings: {
            editDeleteRowVisible: true,
            messageVisible: false,
            itemsPerPage: 10,
            currentPage: 1,
        },
        labels: [
            {
                labelName: 'date',
                labelField: 'date',
                dataType: dataTypes.DATE,
                sortable: true
            },
            {
                labelName: 'document no.',
                labelField: 'document_nr',
                dataType: dataTypes.STRING,
                sortable: true
            },
            {
                labelName: 'total',
                labelField: 'document_sum',
                dataType: dataTypes.NUMBER,
                sortable: true
            }
        ],
        data: {
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
                date: '2020-01-20T11:32:38.000Z',
                document_nr: '203455/12',
                document_sum: 8825.73
            },
            '4': {
                date: '2020-02-03T11:32:38.000Z',
                document_nr: '203455/02',
                document_sum: 12525.73
            },
            '5': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '6': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '7': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '8': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '9': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '10': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '11': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '12': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '13': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '14': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '15': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
            '16': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/03',
                document_sum: 1255.88
            },
        }
    },
    products: {
        settings: {},
        labels: [],
        data: {
            '1': {
                productName: 'Something',
                productNameCont: '',
                productCode: '6120045000',
                unitsOfMeasurement: 'szt',
                piecesInPackage: 5,
                weightInKG: .35,
            },
            '2': {
                productName: 'Other product',
                productNameCont: '',
                productCode: '6120045000',
                unitsOfMeasurement: 'szt',
                piecesInPackage: 5,
                weightInKG: .35,
            }

        }
    },
    clients: {
        settings: {},
        labels: [],
        data: {
            '1': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '2': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '3': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '4': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '5': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '6': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            },
            '7': {
                companyName: 'Something Co.',
                companyNameCont: '',
                addressStreet: 'Sienkiewicza 19A/12',
                addressCity: 'Wrocław',
                addressPostalCode: '00-850',
                vatUeNumber: 'PL 123456789',
            }
        }
    }
};
