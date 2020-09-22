import React, {Component} from 'react';
import './CompanyDetailsPage.scss';
import {PropTypes} from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {alwaysTrue, textNotEmpty} from '../../../utils/valideFunctions';
import {actionNames} from '../../../reduxSettings/constants';


class CompanyDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validation: {},
            companyDetails: this.props.companyDetails
        };
        this.saveCompanyDetails = this.saveCompanyDetails.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.isFieldValid = this.isFieldValid.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(obj) {
        if (obj) {
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newCompanyDetails = {...this.state.companyDetails, [obj.fieldName]: obj.value};
            this.setState({...this.state, validation: newValidationObj, companyDetails: newCompanyDetails});
        }
    }

    isFieldValid(fieldName) {
        if (this.state.validation && this.state.validation.hasOwnProperty(fieldName)) {
            return this.state.validation[fieldName];
        }
        return true;
    }

    isFormValid() {
        let isValid = false;
        const keys = Object.keys(this.state.validation);
        if (keys.length > 0) {
            isValid = true;
            keys.forEach(key => {
                isValid = isValid && this.state.validation[key];
            });
        }
        return isValid;
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
                                         isFieldValid={this.isFieldValid('companyName')}/>

                        <SimpleTextInput label={'Nazwa firmy cd.'} errorMessage={''}
                                         value={this.state.companyDetails.companyNameCont} validate={alwaysTrue}
                                         validateFormPropertyName={'companyNameCont'} changeValue={this.changeValue}
                                         isFieldValid={this.isFieldValid('companyNameCont')}/>

                        <SimpleTextInput label={'Numer VAT UE'} errorMessage={'Numer VAT nie może być pusty'}
                                         value={this.state.companyDetails.vatUeNumber} validate={textNotEmpty}
                                         validateFormPropertyName={'vatUeNumber'} changeValue={this.changeValue}
                                         isFieldValid={this.isFieldValid('vatUeNumber')}/>

                        <SimpleTextInput label={'Kod pocztowy'} errorMessage={'Wypełnij kod pocztowy!'}
                                         value={this.state.companyDetails.addressPostalCode} validate={textNotEmpty}
                                         validateFormPropertyName={'addressPostalCode'} changeValue={this.changeValue}
                                         isFieldValid={this.isFieldValid('addressPostalCode')}/>

                        <SimpleTextInput label={'Miasto'} errorMessage={'Miasto nie może być puste!'}
                                         value={this.state.companyDetails.addressCity} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.isFieldValid('addressCity')}
                                         validateFormPropertyName={'addressCity'}/>

                        <SimpleTextInput label={'Ulica'} errorMessage={'Ulica nie może być pusta!'}
                                         value={this.state.companyDetails.addressStreet} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.isFieldValid('addressStreet')}
                                         validateFormPropertyName={'addressStreet'} />

                        <button className="rounded-button blue btn-save" onClick={this.saveCompanyDetails}
                                disabled={!this.isFormValid()}>Save
                        </button>
                    </form>
                </section>}

                <section className="form-page">
                    <h2 className="form-title">Company <span className="blue">accounts</span></h2>
                    <div></div>
                </section>
            </React.Fragment>
        );
    }
}

CompanyDetailsPage.propTypes = {
    companyDetails: PropTypes.object,
    accounts: PropTypes.object,
    changeCompanyDetails:PropTypes.func
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
