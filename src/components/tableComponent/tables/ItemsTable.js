import connect from 'react-redux/es/connect/connect';
import {TableComponent} from '../TableComponent';
import {actionNames} from '../../../reduxSettings/constants';

function mapStateToProps(state) {
    return {
        data: state.products.data,
        labels: state.products.labels,
        settings: state.products.settings,
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

const ItemsTable = connect(mapStateToProps, mapDispatchToProps)(TableComponent);
export default ItemsTable;