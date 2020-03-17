export const InitData = {
    appState: {
        showApplicationJumbotron: false
    },
    companyDetails: {
        companyName: 'AKME Incorporated',
        addressStreet: 'Main Street 19A/12',
        addressCity: 'London',
        addressPostalCode: '23-569',
        vatUeNumber: 'GB 23450012',
        swiftCodeAccount: 'XW ZX GB LPP',
        bankName: 'Bank of Austria',
        accountNumber: ' GB 06 1189 0035 0000 0001 0056 9186'
    },
    documents: {
       settings : {
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
    }
};
