import { combineReducers } from "redux";

const todos = (state = [], action) => {
    if(action.type === "INIT_TO_DO"){
        console.log(action)
        return action.payload;
    }else if (action.type === "ADD_TO_DO") {
        return [...state, action.payload];
    }
    else if (action.type === "REVERT_STATUS") {
        return state.map(todo =>
            todo.id === action.payload ? { ...todo, done: !todo.done, text: todo.text }
                : todo);
    } else if (action.type === "DELETE_TO_DO") {
        const todos = state.filter(todo => todo.id !== action.payload);
        return todos;
    }
    return state;
}

export default combineReducers({
    todos
});