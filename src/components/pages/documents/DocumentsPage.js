import React from 'react';
import DocumentsTable from '../../tableComponent/tables/DocumentsTable';

export function DocumentsPage() {
    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Documents <span className="blue">list</span></h2>
                <DocumentsTable/>
            </section>
        </React.Fragment>
    )
}
