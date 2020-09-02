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
            editDeleteRowVisible: true
        },
        labels: [
            {
                labelName: 'date',
                labelField: 'date',
                sortable: true
            },
            {
                labelName: 'document no.',
                labelField: 'document_nr',
                sortable: true
            },
            {
                labelName: 'total',
                labelField: 'document_sum',
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
                date: '2020-01-2011:32:38.000Z',
                document_nr: '203455/12',
                document_sum: 8825.73
            }
        }
    },
    products: {}
};
