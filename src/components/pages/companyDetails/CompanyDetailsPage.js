import React, {Component} from 'react';
import './CompanyDetailsPage.scss';
import {PropTypes} from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {alwaysTrue, textNotEmpty} from '../../../utils/valideFunctions';


class CompanyDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validation: {}
        };
        this.changeValidation = this.changeValidation.bind(this);
        this.saveCompanyDetails = this.saveCompanyDetails.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    changeValidation(fieldName, value) {
        const newObj = {...this.state.validation, [fieldName]: value};
        this.setState({...this.state, validation: newObj});
    }

    isFormValid() {
        let isValid = false;
        const keys = Object.keys(this.state.validation);
        if (keys.length>0) {
            isValid = true;
            keys.forEach(key =>{
                isValid = isValid && this.state.validation[key];
            });
        }
        return isValid;
    }

    saveCompanyDetails(event) {
        event.preventDefault();
        console.log(this.state);
    }

    componentDidMount() {
        this.setState({
            companyDetails: this.props.companyDetails
        });
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                {this.state.companyDetails && <section className="form-page">
                    <h2 className="form-title">Company <span className="blue">details</span></h2>
                    <form className="input-form">
                        <SimpleTextInput label={'Nazwa firmy'} errorMessage={'Nazwa firmy nie może być pusta!'}
                                         value={this.state.companyDetails.companyName} validate={textNotEmpty} validateForm={this.changeValidation}
                                         validateFormPropertyName={'companyName'} />
                        {/*<SimpleTextInput label={'Nazwa firmy cd.'} errorMessage={''}*/}
                        {/*                 value={this.state.companyDetails.companyNameCont} validate={alwaysTrue}*/}
                        {/*                 validateForm={this.changeValidation}*/}
                        {/*                 validateFormPropertyName={'companyNameCont'} />*/}

                        {/*<SimpleTextInput label={'Numer VAT UE'} errorMessage={'Numer VAT nie może być pusty'}*/}
                        {/*                 value={this.state.companyDetails.vatUeNumber} validate={textNotEmpty}*/}
                        {/*                 validateForm={this.changeValidation}*/}
                        {/*                 validateFormPropertyName={'vatUeNumber'} />*/}

                        {/*<SimpleTextInput label={'Kod pocztowy'} errorMessage={'Wypełnij kod pocztowy!'}*/}
                        {/*                 value={this.state.companyDetails.addressPostalCode} validate={textNotEmpty}*/}
                        {/*                 validateForm={this.changeValidation}*/}
                        {/*                 validateFormPropertyName={'addressPostalCode'} />*/}

                        {/*<SimpleTextInput label={'Miasto'} errorMessage={'Miasto nie może być puste!'}*/}
                        {/*                 value={this.state.companyDetails.addressCity} validate={textNotEmpty}*/}
                        {/*                 validateForm={this.changeValidation}*/}
                        {/*                 validateFormPropertyName={'addressCity'} />*/}

                        {/*<SimpleTextInput label={'Ulica'} errorMessage={'Ulica nie może być pusta!'}*/}
                        {/*                 value={this.state.companyDetails.addressStreet} validate={textNotEmpty}*/}
                        {/*                 validateForm={this.changeValidation}*/}
                        {/*                 validateFormPropertyName={'addressStreet'} />*/}

                        <button className="rounded-button blue btn-save" onClick={this.saveCompanyDetails} disabled={!this.isFormValid()} >Save</button>
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
    accounts: PropTypes.object
}

function mapStateToProps(state) {
    return {
        companyDetails: state.company.companyDetails,
        accounts: state.company.accounts
    };
}

export default connect(mapStateToProps)(CompanyDetailsPage);
