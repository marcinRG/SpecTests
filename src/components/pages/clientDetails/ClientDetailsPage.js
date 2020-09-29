import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {alwaysTrue, textNotEmpty} from '../../../utils/valideFunctions';
import {isFieldValid, isFormValid} from '../../../utils/utils';
import {actionNames} from '../../../reduxSettings/constants';
import {Link} from 'react-router-dom';

class ClientDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: {},
        };
        this.formValid = this.formValid.bind(this);
        this.fieldValid = this.fieldValid.bind(this);
        this.save = this.save.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.setClient = this.setClient.bind(this);
    }


    save(event) {
        event.preventDefault();
        this.props.changeClientDetails(
            {
                id: this.props.match.params.clientID,
                client: this.state.client,
            });
    }

    changeValue(obj) {
        if (obj) {
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newClient = {...this.state.client, [obj.fieldName]: obj.value};
            this.setState({...this.state, validation: newValidationObj, client: newClient});
        }
    }


    fieldValid(fieldName) {
        return isFieldValid(fieldName, this.state.validation);
    }

    formValid() {
        return isFormValid(this.state.validation);
    }

    setClient(id) {
        if (id) {
            this.setState({
                client: this.props.clients.data[id]
            })
        }
    }

    componentDidMount() {
        if (this.props.match.params && this.props.match.params.clientID) {
            this.setClient(this.props.match.params.clientID);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params && this.props.match.params.clientID) {
            if (this.props.match.params.clientID != prevProps.match.params.clientID) {
                this.setClient(this.props.match.params.clientID);
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Client <span className="blue">details</span></h2>
                    {this.state.client &&
                    <form className="input-form">
                        <SimpleTextInput label={'Nazwa klienta'} errorMessage={'Nazwa firmy nie może być pusta!'}
                                         value={this.state.client.companyName} validate={textNotEmpty}
                                         validateFormPropertyName={'companyName'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('companyName')}/>

                        <SimpleTextInput label={'Nazwa firmy klienta cd.'} errorMessage={''}
                                         value={this.state.client.companyNameCont} validate={alwaysTrue}
                                         validateFormPropertyName={'companyNameCont'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('companyNameCont')}/>

                        <SimpleTextInput label={'Numer VAT UE'} errorMessage={'Numer VAT nie może być pusty'}
                                         value={this.state.client.vatUeNumber} validate={textNotEmpty}
                                         validateFormPropertyName={'vatUeNumber'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('vatUeNumber')}/>

                        <SimpleTextInput label={'Kod pocztowy'} errorMessage={'Wypełnij kod pocztowy!'}
                                         value={this.state.client.addressPostalCode} validate={textNotEmpty}
                                         validateFormPropertyName={'addressPostalCode'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressPostalCode')}/>

                        <SimpleTextInput label={'Miasto'} errorMessage={'Miasto nie może być puste!'}
                                         value={this.state.client.addressCity} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressCity')}
                                         validateFormPropertyName={'addressCity'}/>

                        <SimpleTextInput label={'Ulica'} errorMessage={'Ulica nie może być pusta!'}
                                         value={this.state.client.addressStreet} validate={textNotEmpty}
                                         changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('addressStreet')}
                                         validateFormPropertyName={'addressStreet'}/>

                        <button className="rounded-button blue btn-save" onClick={this.save}
                                disabled={!this.formValid()}>Save
                        </button>

                    </form>
                    }
                    <div>
                        <Link className="rounded-button blue btn-back" to={'/clients'}>Back</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        clients: state.clients,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeClientDetails: (obj) => {
            dispatch({
                type: actionNames.CHANGE_CLIENT_DETAILS,
                value: obj
            })
        }
    }
}

ClientDetailsPage.propTypes = {
    match: PropTypes.object,
    clients: PropTypes.object,
    changeClientDetails: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsPage);