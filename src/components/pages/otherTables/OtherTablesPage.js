import React from 'react';
import {TabContainer} from '../../otherComponents/tab/tabContainer/TabContainer';

export function OtherTablesPage() {
    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Other <span className="blue">tables & settings</span></h2>
                <TabContainer/>
            </section>
        </React.Fragment>
    );
}
