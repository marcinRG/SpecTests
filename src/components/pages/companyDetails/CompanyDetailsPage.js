import React from 'react';
import './CompanyDetailsPage.scss';

export function CompanyDetailsPage() {
    return (
        <React.Fragment>
            <section className="form-page">
                <h2 className="form-title">Company <span className="blue">details</span></h2>
                <form className="input-form">
                    <label className="label-form">Company name</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">VAT UE Number</label>
                    <input className="text-input-form" type="text"/>
                    <h3 className="form-subtitle">Address</h3>
                    <label className="label-form">Street name and number</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">Postal code</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">City</label>
                    <input className="text-input-form" type="text"/>
                    <h3 className="form-subtitle">Account details</h3>
                    <label className="label-form">Bank name</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">Account number</label>
                    <input className="text-input-form" type="text"/>
                    <label className="label-form">Swift code</label>
                    <input className="text-input-form" type="text"/>
                    <button className="rounded-button blue btn-save">Save</button>
                </form>
            </section>
        </React.Fragment>
    );
}
