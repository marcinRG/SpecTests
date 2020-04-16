import React from 'react';
import './CompanyDetailsPage.scss';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {ComboBox} from '../../formComponents/ComboBox/ComboBox';
import {DynamicComboBox} from '../../formComponents/DynamicComboBox/DynamicComboBox';
import {Spinner} from '../../formComponents/Spinner/Spinner';
import {DatePicker} from '../../formComponents/DatePicker/DatePicker';



export function CompanyDetailsPage() {
    return (
        <React.Fragment>
            <section className="form-page">
                <h2 className="form-title">Company <span className="blue">details</span></h2>
                <form className="input-form">
                    <label className="label-form">Company name</label>
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<label className="label-form">VAT UE Number</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<h3 className="form-subtitle">Address</h3>*/}
                    {/*<label className="label-form">Street name and number</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<label className="label-form">Postal code</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<label className="label-form">City</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<h3 className="form-subtitle">Account details</h3>*/}
                    {/*<label className="label-form">Bank name</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<label className="label-form">Account number</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    {/*<label className="label-form">Swift code</label>*/}
                    {/*<input className="text-input-form" type="text"/>*/}
                    <span> Components to do </span>
                    <SimpleTextInput label={'txt input'} errorMessage={'error!!!'} />
                    <ComboBox label={'combo box'} errorMessage={'errrorrr!!!!'} />
                    <DynamicComboBox label={'dynamic combo box'} errorMessage={'errrorrr!!!!'} />
                    <Spinner label={'Spinner'} errorMessage={'errrorrr!!!!'} />
                    <DatePicker label={'label'} errorMessage={'error!!!'} />

                    <button className="rounded-button blue btn-save">Save</button>
                </form>
            </section>
        </React.Fragment>
    );
}
