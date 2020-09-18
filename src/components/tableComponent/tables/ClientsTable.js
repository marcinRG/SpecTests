import {connect} from 'react-redux';
import {TableComponent} from '../TableComponent';
import {actionNames} from '../../../reduxSettings/constants';



function mapStateToProps(state, ownProps) {
    return {
        editFunction: ownProps.editFunction,
        data: state.clients.data,
        labels: state.clients.labels,
        settings: state.clients.settings
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
        }
    }
}

const ClientsTable = connect(mapStateToProps, mapDispatchToProps)(TableComponent);
export default ClientsTable;