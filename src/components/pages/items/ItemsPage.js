import React from 'react';
import ItemsTable from '../../tableComponent/tables/ItemsTable';


export function ItemsPage() {
    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Items <span className="blue">list</span></h2>
                <ItemsTable/>
            </section>
        </React.Fragment>
    )
}
