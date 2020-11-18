import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DynamicComboBox} from '../../formComponents/DynamicComboBox/DynamicComboBox';
import {PropTypes} from 'prop-types';

const selectedItem = {
    id: '7',
    date: '2020-02-10T11:32:38.000Z',
    document_nr: '203457/05',
    document_sum: 1255.88
}


class DocumentDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.changeValue=this.changeValue.bind(this);
    }

    changeValue(data) {
        console.log('data changed');
        console.log(data);
    }

    render() {
        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Document <span className="blue">details</span></h2>
                    <form className="input-form">
                        <DynamicComboBox label={'Lista wartości'} errorMessage={'Error! coś źle'}
                                         fieldDisplay={'document_nr'} items={this.props.documents} isFieldValid={true}
                                         dropdownMaxLength={5} value={selectedItem} changeValue={this.changeValue}
                        />
                    </form>
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
        docs: state.documents
    };
}

export default connect(mapStateToProps)(DocumentDetailsPage);

DocumentDetailsPage.propTypes = {
    docs: PropTypes.object,
    documents: PropTypes.object
}

// date: '2020-03-17T11:32:38.000Z',
// document_nr: '203455/30',
// document_sum: 2457.12
