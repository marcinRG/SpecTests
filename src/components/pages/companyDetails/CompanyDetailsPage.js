import React from 'react';

export function CompanyDetailsPage() {
    return (
        <React.Fragment>
            <section className="form-page">
                <h2 className="form-title">Company <span className="blue">details</span></h2>
                <form className="input-form">
                    <label className="label-form">Company name</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">Costam</label>
                    <input className="text-input-form" type="text"/>
                </form>
            </section>
        </React.Fragment>
    );
}
