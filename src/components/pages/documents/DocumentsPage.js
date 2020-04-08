import React from 'react';
import {TableComponent} from '../../tableComponent/TableComponent';

export function DocumentsPage() {
    const func = () => {
        console.log('xx222');
    };

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Documents <span className="blue">list</span></h2>
                <TableComponent/>
            </section>
        </React.Fragment>
    )
}
