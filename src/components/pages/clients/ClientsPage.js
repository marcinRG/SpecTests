import React from 'react';
import ClientsTable from '../../tables/ClientsTable';
import {PropTypes} from 'prop-types';
import {newElement} from '../../../utils/newElements';

export function ClientsPage(props) {

    const editFunction = (id) => {
        props.history.push('/client-details/' + id);
    }

    const addNew = () => {
        props.history.push('/item-details/' + newElement.NEW_CLIENT);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Clients <span className="blue">list</span></h2>
                <ClientsTable editFunction={editFunction}/>
                <div className="add-button-wrapper">
                    <button className="rounded-button white-inverted" onClick={addNew}>Add new</button>
                </div>
            </section>
        </React.Fragment>
    )
}

ClientsPage.propTypes = {
    history: PropTypes.object
}
