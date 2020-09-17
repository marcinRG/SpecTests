import React from 'react';
import ClientsTable from '../../tableComponent/tables/ClientsTable';

export function ClientsPage() {
    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Clients <span className="blue">list</span></h2>
                <ClientsTable />
            </section>
        </React.Fragment>
    )
}
