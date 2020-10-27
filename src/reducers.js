import { combineReducers } from "redux";

const todos = (state = [], action) => {
    if(action.type === "ADD_TO_DO"){
        return [...state, action.payload];
    }
    else if(action.type === "REVERT_STATUS"){
        return state.map(todo => 
            todo.id === action.payload ? { ...todo, done: !todo.done } 
            : todo);
    }
    return state;
}



export default combineReducers({
    todos
});