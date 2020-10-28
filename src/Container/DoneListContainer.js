import { connect } from "react-redux";
import DoneList from "../Components/DoneList";


const mapDispatchToProps = state => ({
    todos: state.todos.filter(todo => todo.done)
});


const ToDoGroupContainer = connect(mapDispatchToProps)(
    DoneList
);

export default ToDoGroupContainer;