import { connect } from "react-redux";
import ToDoGroup from "../Components/ToDoGroup";


const mapDispatchToProps = state => ({
    todos: state.todos
});


const ToDoGroupContainer = connect(mapDispatchToProps)(
    ToDoGroup
);

export default ToDoGroupContainer;