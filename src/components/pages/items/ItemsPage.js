import React from 'react';
import ItemsTable from '../../tables/ItemsTable';
import {PropTypes} from 'prop-types';

export function ItemsPage(props) {
    const func = (id) => {
        props.history.push('/item-details/' + id);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Items <span className="blue">list</span></h2>
                <ItemsTable editFunction={func}/>
            </section>
        </React.Fragment>
    )
}

ItemsPage.propTypes = {
    history: PropTypes.object
}
