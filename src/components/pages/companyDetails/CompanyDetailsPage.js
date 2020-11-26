import React, {Component} from 'react';
import './CompanyDetailsPage.scss';
import {PropTypes} from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {actionNames} from '../../../reduxSettings/constants';
import {isFormValid} from '../../../utils/utils';
import SimplifiedCompanyAccounts from '../../simplifedFormTables/SimpifiedCompanyAccounts';
import {
    fieldState,
    initFieldState,
    initValidation
} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';
import {formStates} from '../../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';


class CompanyDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validation: initValidation(this.props.labels, this.props.companyDetails),
            editedFields: initFieldState(this.props.labels, formStates.EDIT),
            companyDetails: this.props.companyDetails
        };
        this.saveCompanyDetails = this.saveCompanyDetails.bind(this);
        this.formValid = this.formValid.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    formValid() {
        return isFormValid(this.state.validation);
    }

    changeValue(obj) {
        if (obj) {
            const newEditedFields = {...this.state.editedFields, [obj.fieldName]: fieldState.EDITED};
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newCompanyDetails = {...this.state.companyDetails, [obj.fieldName]: obj.value};
            this.setState({validation: newValidationObj, editedFields: newEditedFields,companyDetails:newCompanyDetails});
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

                        <SimpleTextInput value={this.state.companyDetails.companyName} changeValue={this.changeValue}
                                         labels={this.props.labels['companyName']} propertyName={'companyName'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.companyDetails.companyNameCont} changeValue={this.changeValue}
                                         labels={this.props.labels['companyNameCont']} propertyName={'companyNameCont'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.companyDetails.vatUeNumber} changeValue={this.changeValue}
                                         labels={this.props.labels['vatUeNumber']} propertyName={'vatUeNumber'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.companyDetails.addressPostalCode} changeValue={this.changeValue}
                                         labels={this.props.labels['addressPostalCode']} propertyName={'addressPostalCode'}
                                         fieldStates={this.state.editedFields}/>


                        <SimpleTextInput value={this.state.companyDetails.addressCity} changeValue={this.changeValue}
                                         labels={this.props.labels['addressCity']} propertyName={'addressCity'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.companyDetails.addressStreet} changeValue={this.changeValue}
                                         labels={this.props.labels['addressStreet']} propertyName={'addressStreet'}
                                         fieldStates={this.state.editedFields}/>

                        <button className="rounded-button blue btn-save" onClick={this.saveCompanyDetails}
                                disabled={!this.formValid()}>Save
                        </button>

                    </form>
                </section>}

                <section className="form-page">
                    <h2 className="form-title">Company <span className="blue">accounts</span></h2>
                    <SimplifiedCompanyAccounts isSelected={true}/>
                </section>
            </React.Fragment>
        );
    }
}

CompanyDetailsPage.propTypes = {
    companyDetails: PropTypes.object,
    labels: PropTypes.object,
    accounts: PropTypes.object,
    changeCompanyDetails: PropTypes.func
}

function mapStateToProps(state) {
    return {
        companyDetails: state.company.data,
        labels: state.company.labels,
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
