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
            '1': {},
            '2': {},
            '3': {}
        }
    }
};
