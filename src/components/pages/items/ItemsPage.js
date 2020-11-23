import React from 'react';
import ItemsTable from '../../tables/ItemsTable';
import {PropTypes} from 'prop-types';
import {newElement} from '../../../utils/newElements';

export function ItemsPage(props) {
    const editFunction = (id) => {
        props.history.push('/item-details/' + id);
    }

    const addNew = () => {
        props.history.push('/item-details/' + newElement.NEW_ITEM);
    }

    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Items <span className="blue">list</span></h2>
                <ItemsTable editFunction={editFunction}/>
                <div className="add-button-wrapper">
                    <button className="rounded-button white-inverted" onClick={addNew}>Add new</button>
                </div>
            </section>
        </React.Fragment>
    )
}

ItemsPage.propTypes = {
    history: PropTypes.object
}
