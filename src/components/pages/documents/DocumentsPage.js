import React from 'react';
import DocumentsTable from '../../tables/DocumentsTable';


export function DocumentsPage() {

    const func = (id) => {
        console.log('documents:' + id);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Documents <span className="blue">list</span></h2>
                <DocumentsTable editFunction={func}/>
            </section>
        </React.Fragment>
    )
}

