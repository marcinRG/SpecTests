import React from 'react';
import ClientsTable from '../../tables/ClientsTable';

export function ClientsPage() {


    const func = (id) => {
        console.log('clients:' + id);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Clients <span className="blue">list</span></h2>
                <ClientsTable editFunction={func}/>
            </section>
        </React.Fragment>
    )
}
