import { connect } from "react-redux";
import ToDoItem from "../Components/ToDoItem";
import {revertStatus,deleteToDo} from "../actions";



const mapDispatchToProps = (dispatch) => ({
    revertStatus : (id) => {
        dispatch(revertStatus(id))
    },
    deleteToDo : (id) => {
        dispatch(deleteToDo(id))
    },
});


const ToDoItemContainer = connect(null,mapDispatchToProps)(
    ToDoItem
);

export default ToDoItemContainer;