import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DynamicComboBox} from '../../formComponents/DynamicComboBox/DynamicComboBox';
import {PropTypes} from 'prop-types';
import {
    initFieldState,
    initValidation
} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';
import {formStates} from '../../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';
import {newElement} from '../../../utils/newElements';
import {DatePicker} from '../../formComponents/DatePicker/DatePicker';
import {ComboBox} from '../../formComponents/ComboBox/ComboBox';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {ObjectPreview} from '../../formComponents/ObjectPreview/ObjectPreview';


class DocumentDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validation: {},
            editedFields: {}
        };
        this.changeValue = this.changeValue.bind(this);
        this.initializeComponent = this.initializeComponent.bind(this);
        this.getDocument = this.getDocument.bind(this);
    }

    getDocument(id) {
        if (id) {
            return this.props.documents[id];
        }
    }

    changeValue(obj) {
        console.log('data changed');
        console.log(obj);
        const newDocumentState = {...this.state.document, [obj.fieldName]: obj.value};
        this.setState({document: newDocumentState});
    }

    initializeComponent() {
        let document = {};
        let componentState;
        if (this.props.match.params && this.props.match.params.documentID) {
            if (this.props.match.params.documentID === newElement.NEW_DOCUMENT) {
                componentState = formStates.ADD_NEW;
            } else {
                document = this.getDocument(this.props.match.params.documentID);
                componentState = formStates.EDIT;
            }
            this.setState({
                document,
                validation: initValidation(this.props.labels, document),
                editedFields: initFieldState(this.props.labels, componentState)
            })
        }
    }

    componentDidMount() {
        this.initializeComponent();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params && this.props.match.params.documentID) {
            if (this.props.match.params.documentID != prevProps.match.params.documentID) {
                this.initializeComponent();
            }
        }
    }


    render() {
       console.log('render');

        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Document <span className="blue">details</span></h2>
                    {this.state.document &&
                    <form className="input-form">

                        <ComboBox items={this.props.invoiceTypes}
                                  value={this.state.document.invoiceType}
                                  labels={this.props.labels['invoiceType']} propertyName={'invoiceType'}
                                  propertyDisplay={'type'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />

                        <div className="form-row columns-2 column-space-20">
                            <DatePicker value={this.state.document.dateOfCreation}
                                        labels={this.props.labels['dateOfCreation']}
                                        changeValue={this.changeValue} fieldStates={this.state.editedFields}
                                        propertyName={'date'}
                            />

                            <DatePicker value={this.state.document.dateOfSale} labels={this.props.labels['dateOfSale']}
                                        changeValue={this.changeValue} fieldStates={this.state.editedFields}
                                        propertyName={'date'}
                            />

                        </div>

                        <div className="form-row columns-2 column-space-20">
                            <ComboBox items={this.props.methodsOfPayments}
                                      value={this.state.document.methodOfPayment}
                                      labels={this.props.labels['methodOfPayment']} propertyName={'methodOfPayment'}
                                      propertyDisplay={'payment'}
                                      changeValue={this.changeValue}
                                      fieldStates={this.state.editedFields}
                            />


                            <DatePicker value={this.state.document.dateOfPayment}
                                        labels={this.props.labels['dateOfPayment']}
                                        changeValue={this.changeValue} fieldStates={this.state.editedFields}
                                        propertyName={'date'}
                            />
                        </div>


                        <SimpleTextInput value={this.state.document.documentNr} changeValue={this.changeValue}
                                         labels={this.props.labels['documentNr']}
                                         propertyName={'documentNr'}
                                         fieldStates={this.state.editedFields}/>


                        <ComboBox items={this.props.accounts}
                                  value={this.state.document.account}
                                  labels={this.props.labels['account']} propertyName={'account'}
                                  propertyDisplay={'accountType'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />

                        <ObjectPreview objectToView={this.state.document.account} propertyToSkip={'accountType'} />


                        <ComboBox items={this.props.currencies}
                                  value={this.state.document.currency}
                                  labels={this.props.labels['currency']} propertyName={'currency'}
                                  propertyDisplay={'currency'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />


                        <ComboBox items={this.props.cars}
                                  value={this.state.document.car}
                                  labels={this.props.labels['car']} propertyName={'car'}
                                  propertyDisplay={'plateNo'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />


                        <ComboBox items={this.props.additionalTexts}
                                  value={this.state.document.additionalText}
                                  labels={this.props.labels['additionalText']} propertyName={'additionalText'}
                                  propertyDisplay={'symbol'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />

                        <ObjectPreview objectToView={this.state.document.additionalText} propertyToSkip={'symbol'} />


                        {/*<DynamicComboBox label={'Lista wartości'} errorMessage={'Error! coś źle'}*/}
                        {/*                 fieldDisplay={'document_nr'} items={this.props.documents} isFieldValid={true}*/}
                        {/*                 dropdownMaxLength={5} value={selectedItem} changeValue={this.changeValue}*/}
                        {/*/>*/}

                    </form>}
                    <div>
                        <Link className="rounded-button blue btn-back" to={'/documents'}>Back</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.company.accounts.data,
        clients: state.clients,
        invoiceTypes: state.additionalTables.invoiceType.data,
        methodsOfPayments: state.additionalTables.methodsOfPayments.data,
        additionalTexts: state.additionalTables.textAdditions.data,
        cars: state.additionalTables.cars.data,
        currencies: state.additionalTables.currencies.data,

        documents: state.documents.data,
        labels: state.documents.labels
    };
}

export default connect(mapStateToProps)(DocumentDetailsPage);

DocumentDetailsPage.propTypes = {

    accounts: PropTypes.object,
    clients: PropTypes.object,
    invoiceTypes: PropTypes.object,
    methodsOfPayments: PropTypes.object,
    additionalTexts: PropTypes.object,
    cars: PropTypes.object,
    currencies: PropTypes.object,

    match: PropTypes.object,
    documents: PropTypes.object,
    labels: PropTypes.object
}
