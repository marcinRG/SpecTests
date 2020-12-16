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
        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Document <span className="blue">details</span></h2>
                    {this.state.document &&
                    <form className="input-form">
                        <DatePicker value={this.state.document.date} labels={this.props.labels['date']}
                                    changeValue={this.changeValue} fieldStates={this.state.editedFields}
                                    propertyName={'date'}
                        />

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
        documents: state.documents.data,
        labels: state.documents.labels
    };
}

export default connect(mapStateToProps)(DocumentDetailsPage);

DocumentDetailsPage.propTypes = {
    match: PropTypes.object,
    documents: PropTypes.object,
    labels: PropTypes.object
}
