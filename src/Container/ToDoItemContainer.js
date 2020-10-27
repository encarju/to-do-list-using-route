import { connect } from "react-redux";
import ToDoItem from "../Components/ToDoItem";
import {revertStatus} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    revertStatus : (id) => {
        dispatch(revertStatus(id))
    },
});


const ToDoItemContainer = connect(null,mapDispatchToProps)(
    ToDoItem
);

export default ToDoItemContainer;