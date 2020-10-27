import { connect } from "react-redux";
import { addToDo } from "../actions";
import ToDoGenerator from "../Components/ToDoGenerator";


const mapDispatchToProps = (dispatch) => ({
    addToDo : (todo) => {
        dispatch(addToDo(todo))
    },
});


const ToDoGeneratorContainer = connect(null,mapDispatchToProps)(
    ToDoGenerator
);

export default ToDoGeneratorContainer;