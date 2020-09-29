import React from 'react';
import DocumentsTable from '../../tables/DocumentsTable';
import {PropTypes} from 'prop-types';

export function DocumentsPage(props) {


    const func = (id) => {
        props.history.push('/document-details/' + id);
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

DocumentsPage.propTypes = {
    history: PropTypes.object
}
