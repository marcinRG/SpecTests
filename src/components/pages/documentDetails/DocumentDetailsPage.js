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

const selectedItem = {
    id: '7',
    date: '2020-02-10T11:32:38.000Z',
    document_nr: '203457/05',
    document_sum: 1255.88
}


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

    changeValue(data) {
        console.log('data changed');
        console.log(data);
    }

    initializeComponent() {
        let document = {};
        let componentState;
        if (this.props.match.params && this.props.match.params.documentID) {
            if (this.props.match.params.documentID === newElement.NEW_ITEM) {
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
        console.log(this.state);
        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Document <span className="blue">details</span></h2>
                    {this.state.document &&
                    <form className="input-form">
                        <DatePicker value={this.state.document.date} labels={this.props.labels}
                                    changeValue={this.changeValue} fieldStates={this.state.editedFields}/>
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

// date: '2020-03-17T11:32:38.000Z',
// document_nr: '203455/30',
// document_sum: 2457.12
