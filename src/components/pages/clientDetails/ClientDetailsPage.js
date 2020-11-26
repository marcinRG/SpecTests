import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {isFormValid} from '../../../utils/utils';
import {Link} from 'react-router-dom';
import {newElement} from '../../../utils/newElements';
import {formStates} from '../../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';
import {
    fieldState,
    initFieldState,
    initValidation
} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';

class ClientDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: {},
        };

        this.formValid = this.formValid.bind(this);
        this.save = this.save.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.getClient = this.getClient.bind(this);
        this.initializeComponent = this.initializeComponent.bind(this);
    }

    initializeComponent() {
        let client = {};
        let componentState;
        if (this.props.match.params && this.props.match.params.clientID) {
            if (this.props.match.params.clientID === newElement.NEW_ITEM) {
                componentState = formStates.ADD_NEW;
            } else {
                client = this.getClient(this.props.match.params.clientID);
                componentState = formStates.EDIT;
            }

            this.setState({
                client,
                validation: initValidation(this.props.clients.labels, client),
                editedFields: initFieldState(this.props.clients.labels, componentState)
            })
        }
    }


    save(event) {
        event.preventDefault();
        // this.props.changeClientDetails(
        //     {
        //         id: this.props.match.params.clientID,
        //         client: this.state.client,
        //     });
    }

    changeValue(obj) {
        if (obj) {
            const newEditedFields = {...this.state.editedFields, [obj.fieldName]: fieldState.EDITED};
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newClient = {...this.state.item, [obj.fieldName]: obj.value};
            this.setState({client: newClient, validation: newValidationObj, editedFields: newEditedFields});
        }
    }
    

    formValid() {
        return isFormValid(this.state.validation);
    }

    getClient(id) {
        if (id) {
            return this.props.clients.data[id];
        }
    }

    componentDidMount() {
        this.initializeComponent();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params && this.props.match.params.clientID) {
            if (this.props.match.params.clientID != prevProps.match.params.clientID) {
                this.initializeComponent();
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

                        <SimpleTextInput value={this.state.client.companyName} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['companyName']} propertyName={'companyName'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.client.companyNameCont} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['companyNameCont']}
                                         propertyName={'companyNameCont'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.client.vatUeNumber} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['vatUeNumber']}
                                         propertyName={'vatUeNumber'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.client.addressPostalCode} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['addressPostalCode']}
                                         propertyName={'addressPostalCode'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.client.addressCity} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['addressCity']}
                                         propertyName={'addressCity'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.client.addressStreet} changeValue={this.changeValue}
                                         labels={this.props.clients.labels['addressStreet']}
                                         propertyName={'addressStreet'}
                                         fieldStates={this.state.editedFields}/>

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
            // dispatch({
            //     type: actionNames.CHANGE_CLIENT_DETAILS,
            //     value: obj
            // })
        }
    }
}

ClientDetailsPage.propTypes = {
    match: PropTypes.object,
    clients: PropTypes.object,
    changeClientDetails: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsPage);