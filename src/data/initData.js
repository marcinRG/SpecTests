import {dataTypes} from '../utils/dataTypes';

export const InitData = {
    appState: {
        showApplicationJumbotron: false
    },
    company: {
        labels: {
            companyName: {
                labelName: 'Nazwa firmy',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Nazwa firmy nie może być pusta'
            },
            companyNameCont: {
                labelName: 'nazwa firmy cd.',
                dataType: dataTypes.STRING,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: ''
            },
            addressCity: {
                labelName: 'miasto',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Musisz wypełnić miejscowość'
            },
            addressStreet: {
                labelName: 'ulica',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Musisz podać ulicę'
            },
            addressPostalCode: {
                labelName: 'kod pocztowy',
                dataType: dataTypes.STRING,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podaj kod pocztowy!'
            },
            vatUeNumber: {
                labelName: 'numer VAT UE',
                dataType: dataTypes.STRING,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Musisz podać numer VAT UE!'
            }
        },
        data: {
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
        labels: {

            dateOfCreation: {
                labelName: 'data wystawienia',
                labelField: 'dateOfCreation',
                dataType: dataTypes.DATE,
                required: true,
                sortable: false,
                isTableHeader: true,
                errorMsg: 'Data wystawienia jest nieprawidłowa!'
            },

            dateOfSale: {
                labelName: 'data sprzedaży',
                labelField: 'dateOfSale',
                dataType: dataTypes.DATE,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Data sprzedaży jest nieprawidłowa!'
            },

            account: {
                labelName: 'konto',
                labelField: 'account',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Konto jest nieprawidłowe!'
            },

            buyer: {
                labelName: 'nabywca',
                labelField: 'buyer',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Nabywca jest nieprawidłowy!'
            },

            methodOfPayment: {
                labelName: 'sposób zapłaty',
                labelField: 'methodOfPayment',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Sposób zapłaty jest nieprawidłowy!'
            },

            dateOfPayment: {
                labelName: 'termin zapłaty',
                labelField: 'dateOfPayment',
                dataType: dataTypes.DATE,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Termin zapłaty jest nieprawidłowy!'
            },

            currency: {
                labelName: 'waluta',
                labelField: 'currency',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Waluta jest nieprawidłowa!'
            },

            invoiceType: {
                labelName: 'rodzaj faktury',
                labelField: 'invoiceType',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podany rodzaj faktury jest nieprawidłowy!'
            },

            documentNr: {
                labelName: 'document no.',
                labelField: 'documentNr',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Numer dokumentu nieprawidłowy!'
            },

            documentSum: {
                labelName: 'total',
                labelField: 'documentSum',
                dataType: dataTypes.NUMBER,
                required: false,
                sortable: true,
                isTableHeader: true,
            },

            car: {
                labelName: 'samochód',
                labelField: 'car',
                dataType: dataTypes.OBJECT,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podany samochód jest nieprawidłowy!'
            },

            additionalText: {
                labelName: 'dodatkowy tekst',
                labelField: 'additionalText',
                dataType: dataTypes.OBJECT,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podany tekst jest nieprawidłowy!'
            }

        },
        data: {
            '1': {
                dateOfCreation:'2020-03-17',
                dateOfSale:'2020-03-17',
                dateOfPayment:'2020-03-24',
                account: {
                    accountType: 'krajowe',
                    swiftCodeAccount: 'PL XX 22 33',
                    bankName: 'PKO BP',
                    accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
                },
                buyer:{
                    companyName: 'AKME GmbH',
                    companyNameCont: '',
                    addressStreet: 'Breslauer Str 19',
                    addressCity: 'Berlin',
                    addressPostalCode: '33-150',
                    vatUeNumber: 'DE 123456789',
                },
                documentNr: '203455/01',
                invoiceType: {
                    type: 'faktura VAT - krajowa'
                },
                methodOfPayment: {
                    payment: 'gotówka'
                },
                additionalText: {
                    symbol: 'krajowe',
                    text: 'Dziękujemy i zapraszamy ponownie',
                    textCont: ''
                },
                car: {},
                currency: {
                    currency: 'zł'
                },
                documentSum: 2457.12
            },
            // '2': {
            //     dateOfCreation:'2019-12-17',
            //     dateOfSale:'2019-12-17',
            //     dateOfPayment:'2019-12-17',
            //     account: {
            //         accountType: 'krajowe',
            //         swiftCodeAccount: 'PL XX 22 33',
            //         bankName: 'PKO BP',
            //         accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
            //     },
            //     buyer:{
            //         companyName: 'Something Co.',
            //         companyNameCont: '',
            //         addressStreet: 'Sienkiewicza 19A/12',
            //         addressCity: 'Wrocław',
            //         addressPostalCode: '00-850',
            //         vatUeNumber: 'PL 123456789',
            //     },
            //
            //     documentNr: '203455/02',
            //     invoiceType: {
            //         type: 'faktura VAT - krajowa'
            //     },
            //     methodOfPayment: {
            //         payment: 'gotówka'
            //     },
            //     additionalText: {
            //         symbol: 'krajowe',
            //         text: 'Dziękujemy i zapraszamy ponownie',
            //         textCont: ''
            //     },
            //     car: {
            //
            //     },
            //     currency: {
            //         currency: 'kč'
            //     },
            //     documentSum: 125.30
            // },
            // '3': {
            //     dateOfCreation:'2020-01-20',
            //     dateOfSale:'2020-01-20',
            //     dateOfPayment:'2020-01-20',
            //     account: {
            //         accountType: 'krajowe',
            //         swiftCodeAccount: 'PL XX 22 33',
            //         bankName: 'PKO BP',
            //         accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
            //     },
            //     buyer:{
            //         companyName: 'Something Co.',
            //         companyNameCont: '',
            //         addressStreet: 'Sienkiewicza 19A/12',
            //         addressCity: 'Wrocław',
            //         addressPostalCode: '00-850',
            //         vatUeNumber: 'PL 123456789',
            //     },
            //
            //     documentNr: '203455/02',
            //     invoiceType: {
            //         type: 'faktura proforma'
            //     },
            //     methodOfPayment: {
            //         payment: 'przelew'
            //     },
            //     additionalText: {
            //         symbol: 'krajowe',
            //         text: 'Dziękujemy i zapraszamy ponownie',
            //         textCont: ''
            //     },
            //     car: {
            //
            //     },
            //     currency: {
            //         currency: 'zł'
            //     },
            //     documentSum: 8825.73
            // },
            // '4': {
            //     dateOfCreation:'2020-02-03',
            //     dateOfSale:'2020-02-03',
            //     dateOfPayment:'2020-02-03',
            //     account: {
            //         accountType: 'krajowe',
            //         swiftCodeAccount: 'PL XX 22 33',
            //         bankName: 'PKO BP',
            //         accountNumber: ' PL 06 1189 0035 0000 0001 0056 9186'
            //     },
            //     buyer:{
            //         companyName: 'Super Company',
            //         companyNameCont: '',
            //         addressStreet: 'Downing Str 8',
            //         addressCity: 'London',
            //         addressPostalCode: 'AX-12E',
            //         vatUeNumber: 'UK 123456789',
            //     },
            //
            //     documentNr: '203455/04',
            //     invoiceType: {
            //         type: 'wewnątrzwspólnotowa dostawa towarów'
            //     },
            //     methodOfPayment: {
            //         payment: 'gotówka'
            //     },
            //     additionalText: {
            //         symbol: 'zagraniczne',
            //         text: 'Podatek VAT od transakcji uiszcza nabywca',
            //         textCont: 'Dostawa wewnątrzwspólnotowa art. 41 i 42 ust. o VAT'
            //     },
            //     car: {
            //         plateNo: 'DXC 2275',
            //         carName: 'Mercedes Vito'
            //     },
            //     currency: {
            //         currency: '€'
            //     },
            //     documentSum: 12525.73
            // },
            // '5': {
            //     dateOfCreation:'2020-02-10',
            //     dateOfSale:'2020-02-10',
            //     dateOfPayment:'2020-02-17',
            //     account: {
            //         accountType: 'zagraniczne',
            //         swiftCodeAccount: 'XW ZX GB LPP',
            //         bankName: 'Bank of Austria',
            //         accountNumber: ' GB 06 1189 0035 0000 0001 0056 9186'
            //     },
            //     buyer:{
            //         companyName: 'Something Co.',
            //         companyNameCont: '',
            //         addressStreet: 'Sienkiewicza 19A/12',
            //         addressCity: 'Wrocław',
            //         addressPostalCode: '00-850',
            //         vatUeNumber: 'PL 123456789',
            //     },
            //
            //     documentNr: '203455/05',
            //     invoiceType: {
            //         type: 'faktura VAT - krajowa'
            //     },
            //     methodOfPayment: {
            //         payment: 'gotówka'
            //     },
            //     additionalText: {
            //         symbol: 'krajowe',
            //         text: 'Dziękujemy i zapraszamy ponownie',
            //         textCont: ''
            //     },
            //     car: {
            //
            //     },
            //     currency: {
            //         currency: 'zł'
            //     },
            //     documentSum: 1255.88
            // },
            // '6': {
            //     dateOfCreation:'2020-02-10',
            //     dateOfSale:'2020-02-10',
            //     dateOfPayment:'2020-02-24',
            //     account: {
            //         accountType: 'zagraniczne',
            //         swiftCodeAccount: 'XW ZX GB LPP',
            //         bankName: 'Bank of Austria',
            //         accountNumber: ' GB 06 1189 0035 0000 0001 0056 9186'
            //     },
            //     buyer:{
            //         companyName: 'Something Co.',
            //         companyNameCont: '',
            //         addressStreet: 'Sienkiewicza 19A/12',
            //         addressCity: 'Wrocław',
            //         addressPostalCode: '00-850',
            //         vatUeNumber: 'PL 123456789',
            //     },
            //
            //     documentNr: '203456/05',
            //     invoiceType: {
            //         type: 'wewnątrzwspólnotowa dostawa towarów'
            //     },
            //     methodOfPayment: {
            //         payment: 'przelew'
            //     },
            //     additionalText: {
            //         symbol: 'zagraniczne',
            //         text: 'Podatek VAT od transakcji uiszcza nabywca',
            //         textCont: 'Dostawa wewnątrzwspólnotowa art. 41 i 42 ust. o VAT'
            //     },
            //     car: {
            //         plateNo: 'AXB 125Q',
            //         carName: 'Fiat Ducato'
            //     },
            //     currency: {
            //         currency: '€'
            //     },
            //     documentSum: 1255.88
            // },
            // '7': {
            //     date: '2020-02-10T11:32:38.000Z',
            //     documentNr: '203457/05',
            //     documentSum: 1255.88
            // },
            // '8': {
            //     date: '2020-02-10T11:32:38.000Z',
            //     documentNr: '203458/06',
            //     documentSum: 1255.88
            // },
            // '9': {
            //     date: '2020-02-10T11:32:38.000Z',
            //     documentNr: '303458/06',
            //     documentSum: 1255.88
            // },
            // '10': {
            //     date: '2020-02-10T11:32:38.000Z',
            //     documentNr: '303459/06',
            //     documentSum: 1255.88
            // },
            // '11': {
            //     date: '2020-02-10T11:32:38.000Z',
            //     documentNr: '303460/06',
            //     documentSum: 1255.88
            // },
            // '12': {
            //     date: '2020-02-10',
            //     documentNr: '403461/07',
            //     documentSum: 1255.88
            // },
            // '13': {
            //     date: '2020-02-10',
            //     documentNr: '403462/07',
            //     documentSum: 1255.88
            // },
            // '14': {
            //     date: '2020-02-10',
            //     documentNr: '403463/07',
            //     documentSum: 1255.88
            // },
            // '15': {
            //     date: '2020-02-10',
            //     documentNr: '403464/07',
            //     documentSum: 1255.88
            // },
            // '16': {
            //     date: '2020-02-10',
            //     documentNr: '403465/07',
            //     documentSum: 1255.88
            // },
        }
    },

    products: {
        settings: {
            editDeleteRowVisible: true,
            messageVisible: false,
            itemsPerPage: 10,
            currentPage: 1,
        },
        labels: {
            productName: {
                labelName: 'nazwa produktu',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Nazwa produktu nie może być pusta'
            },

            productNameCont: {
                labelName: 'nazwa produktu cd.',
                dataType: dataTypes.STRING,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Błąd!'
            },

            piecesInPackage: {
                labelName: 'ilość sztuk w paczce',
                dataType: dataTypes.NUMBER,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Ilość sztuk w paczce musi byc wypełniona!'
            },

            weightInKG: {
                labelName: 'waga [kg]',
                dataType: dataTypes.NUMBER,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podaj wagę w kg'
            },

            productCode: {
                labelName: 'PCN',
                dataType: dataTypes.STRING,
                required: false,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Nazwa produktu nie może być pusta'
            },

            price: {
                labelName: 'cena',
                dataType: dataTypes.NUMBER,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Musisz podać cenę produktu'
            },

            tax: {
                labelName: 'stawka podatku',
                dataType: dataTypes.OBJECT,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Musisz wybrać jakąś stawkę podatku'
            },

            unitsOfMeasurement: {
                labelName: 'jednostka miary',
                dataType: dataTypes.OBJECT,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Musisz wybrać jednostkę miary'
            }

        },
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
        labels: {
            companyName: {
                labelName: 'Nazwa firmy klienta',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Nazwa firmy odbiorcy nie może być pusta'
            },
            addressCity: {
                labelName: 'miasto',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Musisz wypełnić miejscowość'
            },
            addressStreet: {
                labelName: 'ulica',
                dataType: dataTypes.STRING,
                required: true,
                sortable: true,
                isTableHeader: true,
                errorMsg: 'Musisz podać ulicę'
            },
            companyNameCont: {
                labelName: 'nazwa firmy klienta cd.',
                dataType: dataTypes.STRING,
                required: false,
                sortable: false,
                isTableHeader: false,
                errorMsg: ''
            },
            addressPostalCode: {
                labelName: 'kod pocztowy',
                dataType: dataTypes.STRING,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Podaj kod pocztowy!'
            },
            vatUeNumber: {
                labelName: 'numer VAT UE',
                dataType: dataTypes.STRING,
                required: true,
                sortable: false,
                isTableHeader: false,
                errorMsg: 'Musisz podać numer VAT UE!'
            }
        },
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
