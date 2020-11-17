import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DynamicComboBox} from '../../formComponents/DynamicComboBox/DynamicComboBox';
import {PropTypes} from 'prop-types';


class DocumentDetailsPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Document <span className="blue">details</span></h2>
                    <form className="input-form">
                        <DynamicComboBox label={'costam'} errorMessage={'error! costam zle'} fieldDisplay={'costam'} items={this.props.documents} />
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
        documents: state.documents,
    };
}

export default connect(mapStateToProps)(DocumentDetailsPage);

DocumentDetailsPage.propTypes = {
    documents: PropTypes.object,
}

// date: '2020-03-17T11:32:38.000Z',
// document_nr: '203455/30',
// document_sum: 2457.12
