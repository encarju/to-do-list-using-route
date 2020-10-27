import { combineReducers } from "redux";

const todos = (state = [], action) => {
    if(action.type === "ADD_TO_DO"){
        return [...state, action.payload];
    }
    return state;
}

export default combineReducers({
    todos
});