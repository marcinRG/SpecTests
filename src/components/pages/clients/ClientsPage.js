import React from 'react';
import ClientsTable from '../../tables/ClientsTable';
import {PropTypes} from 'prop-types';

export function ClientsPage(props) {

    const func = (id) => {
        props.history.push('/client-details/' + id);
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

ClientsPage.propTypes = {
    history: PropTypes.object
}
