import {connect} from 'react-redux';
import {TableComponent} from '../TableComponent';
import {actionNames} from '../../../reduxSettings/constants';



function mapStateToProps(state, ownProps) {
    return {
        editFunction: ownProps.editFunction,
        data: state.documents.data,
        labels: state.documents.labels,
        settings: state.documents.settings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeSortMethod: (obj) => {
            dispatch({
                type: actionNames.CHANGE_SORT_METHOD,
                value: obj
            })
        },
        toggleMessageVisibility: (obj) => {
            dispatch({
                type: actionNames.SHOW_MESSAGE,
                value: obj
            })
        },
        changePage: (obj) => {
           dispatch({
               type: actionNames.CHANGE_PAGE,
               value: obj
           })
        }
    }
}

const DocumentsTable = connect(mapStateToProps, mapDispatchToProps)(TableComponent);
export default DocumentsTable;