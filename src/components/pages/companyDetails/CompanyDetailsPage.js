import React, {Component} from 'react';
import './CompanyDetailsPage.scss';
import {PropTypes} from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {alwaysTrue, textNotEmpty} from '../../../utils/valideFunctions';
import {actionNames} from '../../../reduxSettings/constants';
import {isFieldValid, isFormValid} from '../../../utils/utils';
import SimplifiedCompanyAccounts from '../../simplifedFormTables/SimpifiedCompanyAccounts';


class CompanyDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validation: {},
            companyDetails: this.props.companyDetails
        };
        this.saveCompanyDetails = this.saveCompanyDetails.bind(this);
        this.formValid = this.formValid.bind(this);
        this.fieldValid = this.fieldValid.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    fieldValid(fieldName) {
        return isFieldValid(fieldName, this.state.validation);
    }

    formValid() {
        return isFormValid(this.state.validation);
    }

    changeValue(obj) {
        if (obj) {
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newCompanyDetails = {...this.state.companyDetails, [obj.fieldName]: obj.value};
            this.setState({...this.state, validation: newValidationObj, companyDetails: newCompanyDetails});
        }
    }

    saveCompanyDetails(event) {
        event.preventDefault();
        this.props.changeCompanyDetails(this.state.companyDetails);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.companyDetails && <section className="form-page">
                    <h2 className="form-title">Company <span className="blue">details</span></h2>
                    <form className="input-form">

                        <SimpleTextInput label={'Nazwa firmy'} errorMessage={'Nazwa firmy nie może być pusta!'}
                                         value={this.state.companyDetails.companyName} validate={textNotEmpty}
                                         validateFormPropertyName={'companyName'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('companyName')}/>

                        <SimpleTextInput label={'Nazwa firmy cd.'} errorMessage={''}
                                         value={this.state.companyDetails.companyNameCont} validate={alwaysTrue}
                                         validateFormPropertyName={'companyNameCont'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('companyNameCont')}/>

                        <SimpleTextInput label={'Numer VAT UE'} errorMessage={'Numer VAT nie może być pusty'}
                                         value={this.state.companyDetails.vatUeNumber} validate={textNotEmpty}
                                         validateFormPropertyName={'vatUeNumber'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('vatUeNumber')}/>

                        <SimpleTextInput label={'Kod pocztowy'} errorMessage={'Wypełnij kod pocztowy!'}
                                         value={this.state.companyDetails.addressPostalCode} validate={textNotEmpty}
                                         validateFormPropertyName={'addressPostalCode'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressPostalCode')}/>

                        <SimpleTextInput label={'Miasto'} errorMessage={'Miasto nie może być puste!'}
                                         value={this.state.companyDetails.addressCity} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressCity')}
                                         validateFormPropertyName={'addressCity'}/>

                        <SimpleTextInput label={'Ulica'} errorMessage={'Ulica nie może być pusta!'}
                                         value={this.state.companyDetails.addressStreet} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressStreet')}
                                         validateFormPropertyName={'addressStreet'}/>

                        <button className="rounded-button blue btn-save" onClick={this.saveCompanyDetails}
                                disabled={!this.formValid()}>Save
                        </button>
                    </form>
                </section>}

                <section className="form-page">
                    <h2 className="form-title">Company <span className="blue">accounts</span></h2>
                    <SimplifiedCompanyAccounts/>
                </section>
            </React.Fragment>
        );
    }
}

CompanyDetailsPage.propTypes = {
    companyDetails: PropTypes.object,
    accounts: PropTypes.object,
    changeCompanyDetails: PropTypes.func
}

function mapStateToProps(state) {
    return {
        companyDetails: state.company.companyDetails,
        accounts: state.company.accounts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeCompanyDetails: (obj) => {
            dispatch({
                type: actionNames.CHANGE_COMPANY_DETAILS,
                value: obj
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailsPage);
