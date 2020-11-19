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
        accounts: {
            labels: {
                accountType: {
                    name: 'Skrócona nazwa konta',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Skórcona nazwa konta jest wymagana!'
                },
                swiftCodeAccount: {
                    name: 'Numer konta SWIFT',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Numer Swift jest wymagany!'
                },
                bankName: {
                    name: 'Nazwa banku',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Nazwa banku jest wymagana!'
                },
                accountNumber: {
                    name: 'Numer konta',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Numer konta jest wymagany!'
                }
            },
            data: {
                '1': {
                    accountType: 'krajowe',
                    swiftCodeAccount: 'PL XX 22 33',
                    bankName: 'PKO BP',
                    accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
                },
                '2': {
                    accountType: 'zagraniczne',
                    swiftCodeAccount: 'XW ZX GB LPP',
                    bankName: 'Bank of Austria',
                    accountNumber: ' GB 06 1189 0035 0000 0001 0056 9186'
                }
            },

        }
    },

    additionalTables: {
        cars: {
            labels: {
                plateNo: {
                    name: 'numer rejestracyjny',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Numer rejestracyjny jest wymagany!'
                },
                carName: {
                    name: 'nazwa samochodu',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Musisz wpisać nazwę samochodu!'
                }
            },
            data: {
                '1': {
                    plateNo: 'DXC 2275',
                    carName: 'Mercedes Vito'
                },
                '2': {
                    plateNo: 'WBA 3381',
                    carName: 'Mercedes Sprinter'
                },
                '3': {
                    plateNo: 'AXB 125Q',
                    carName: 'Fiat Ducato'
                },
            }

        },
        methodsOfPayments: {
            labels: {
                payment: {
                    name: 'rodzaj płatności',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Musisz wpisać nazwę rodzaju płatności!'
                }
            },
            data: {
                '1': {
                    payment: 'gotówka'
                },
                '2': {
                    payment: 'przelew'
                }
            }
        },
        invoiceType: {
            labels: {
                type: {
                    name: 'typ faktury',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Musisz określić typ faktury!'
                }
            },
            data: {
                VAT: {
                    type: 'faktura VAT - krajowa'
                },
                WDT: {
                    type: 'wewnątrzwspólnotowa dostawa towarów'
                },
                PROFORMA: {
                    type: 'faktura proforma'
                },
                KOREKTA:{
                    type: 'faktura korygująca'
                }
            }
        },
        taxRates: {
            labels: {
                taxName: {
                    name: 'nazwa podatku',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Nazwa podatku nie może być pusta!'
                },
                taxRate: {
                    name: 'stawka podatku',
                    dataType: dataTypes.NUMBER,
                    required: true,
                    errorMsg: 'Podaj wartość dla stawki podatku!'
                }
            },
            data: {
                '1': {
                    taxName: '0%',
                    taxRate: 0
                },
                '2': {
                    taxName: '5%',
                    taxRate: 0.05
                },
                '3': {
                    taxName: '8%',
                    taxRate: 0.08
                },
                '7': {
                    taxName: '23%',
                    taxRate: 0.23
                },
                '5': {
                    taxName: 'NP',
                    taxRate: 0
                }
            }
        },
        textAdditions: {
            labels: {
                symbol: {
                    name: 'skrócona nazwa',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Skrót nie może być pusty!'
                },
                text: {
                    name: 'tekst dopiski',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Tekst dopiski nie może być pusty!'
                },
                textCont: {
                    name: 'tekst dopiski cd.',
                    dataType: dataTypes.STRING,
                    required: false,
                    errorMsg: ''
                },
            },
            data: {
                '1': {
                    symbol: 'krajowe',
                    text: 'Dziękujemy i zapraszamy ponownie',
                    textCont: ''
                },
                '2': {
                    symbol: 'zagraniczne',
                    text: 'Podatek VAT od transakcji uiszcza nabywca',
                    textCont: 'Dostawa wewnątrzwspólnotowa art. 41 i 42 ust. o VAT'
                }
            }
        },
        unitsOfMeasurement: {
            labels: {
                unit: {
                    name: 'nazwa jednostki miary',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Nazwa jednostki miary nie może być pusta!'
                }
            },
            data: {
                '1': {
                    unit: 'szt',
                },
                '2': {
                    unit: 'm'
                },
                '3': {
                    unit: 'y'
                }
            }

        },
        currencies: {
            labels: {
                currency: {
                    name: 'symbol waluty',
                    dataType: dataTypes.STRING,
                    required: true,
                    errorMsg: 'Symbol waluty nie może być pusty!'
                }
            },
            data: {
                '1': {
                    currency: 'zł'
                },
                '2': {
                    currency: 'kč'
                },
                '3': {
                    currency: '€'
                }
            }
        },
    },

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
                document_nr: '203455/01',
                document_sum: 2457.12
            },
            '2': {
                date: '2019-12-17T11:32:38.000Z',
                document_nr: '203455/02',
                document_sum: 125.30
            },
            '3': {
                date: '2020-01-20T11:32:38.000Z',
                document_nr: '203455/02',
                document_sum: 8825.73
            },
            '4': {
                date: '2020-02-03T11:32:38.000Z',
                document_nr: '203455/04',
                document_sum: 12525.73
            },
            '5': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203455/05',
                document_sum: 1255.88
            },
            '6': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203456/05',
                document_sum: 1255.88
            },
            '7': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203457/05',
                document_sum: 1255.88
            },
            '8': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '203458/06',
                document_sum: 1255.88
            },
            '9': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '303458/06',
                document_sum: 1255.88
            },
            '10': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '303459/06',
                document_sum: 1255.88
            },
            '11': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '303460/06',
                document_sum: 1255.88
            },
            '12': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '403461/07',
                document_sum: 1255.88
            },
            '13': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '403462/07',
                document_sum: 1255.88
            },
            '14': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '403463/07',
                document_sum: 1255.88
            },
            '15': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '403464/07',
                document_sum: 1255.88
            },
            '16': {
                date: '2020-02-10T11:32:38.000Z',
                document_nr: '403465/07',
                document_sum: 1255.88
            },
        }
    },

    products: {
        settings: {
            editDeleteRowVisible: true,
            messageVisible: false,
            itemsPerPage: 10,
            currentPage: 1,
        },
        labels: [
            {
                labelName: 'product',
                labelField: 'productName',
                dataType: dataTypes.STRING,
                sortable: true
            },
            {
                labelName: 'PCN',
                labelField: 'productCode',
                dataType: dataTypes.STRING,
                sortable: true
            },
            {
                labelName: 'price',
                labelField: 'price',
                dataType: dataTypes.NUMBER,
                sortable: true
            }
        ],
        data: {
            '1': {
                productName: 'Something',
                productNameCont: '',
                productCode: '6120045000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '12.45',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '0%',
                    taxRate: 0
                }
            },
            '2': {
                productName: 'Other product',
                productNameCont: '',
                productCode: '6120045000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '9.25',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            },
            '3': {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '25.75',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            },
            '4': {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '25.75',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            },
            '5': {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '25.75',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            },
            '6': {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '25.75',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            },
            '7': {
                productName: 'Lorem ipsum',
                productNameCont: '',
                productCode: '981245000',
                unitsOfMeasurement: {
                    unit: 'szt'
                },
                price: '25.75',
                piecesInPackage: '5',
                weightInKG: '.35',
                tax: {
                    taxName: '23%',
                    taxRate: 0.23
                }
            }
        }
    },

    clients: {
        settings: {
            editDeleteRowVisible: true,
            messageVisible: false,
            itemsPerPage: 10,
            currentPage: 1
        },
        labels: [
            {
                labelName: 'company',
                labelField: 'companyName',
                dataType: dataTypes.STRING,
                sortable: true
            },
            {
                labelName: 'city',
                labelField: 'addressCity',
                dataType: dataTypes.STRING,
                sortable: true
            },
            {
                labelName: 'street',
                labelField: 'addressStreet',
                dataType: dataTypes.STRING,
                sortable: true
            }
        ],
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
                companyName: 'AKME GmbH',
                companyNameCont: '',
                addressStreet: 'Breslauer Str 19',
                addressCity: 'Berlin',
                addressPostalCode: '33-150',
                vatUeNumber: 'DE 123456789',
            },
            '3': {
                companyName: 'Super Company',
                companyNameCont: '',
                addressStreet: 'Downing Str 8',
                addressCity: 'London',
                addressPostalCode: 'AX-12E',
                vatUeNumber: 'UK 123456789',
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
