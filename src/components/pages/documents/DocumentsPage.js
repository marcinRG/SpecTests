import React from 'react';
import DocumentsTable from '../../tables/DocumentsTable';
import {PropTypes} from 'prop-types';
import {newElement} from '../../../utils/newElements';

export function DocumentsPage(props) {


    const editFunction = (id) => {
        props.history.push('/document-details/' + id);
    }

    const addNew = () => {
        props.history.push('/document-details/' + newElement.NEW_DOCUMENT);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Documents <span className="blue">list</span></h2>
                <DocumentsTable editFunction={editFunction}/>
                <div className="add-button-wrapper">
                    <button className="rounded-button white-inverted" onClick={addNew}>Add new</button>
                </div>
            </section>
        </React.Fragment>
    )
}

DocumentsPage.propTypes = {
    history: PropTypes.object
}


