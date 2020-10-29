import api from './api';

export const getTodos = () => {
    return api.get('/todos')
}

export const addTodo = (text) => {
    return api.post('/todos',{text})
}

export const deleteToDo = (id) =>{
    return api.delete(`/todos/${id}`)
}

export const updateToDo = ({id,done,text})  =>{
    return api.put(`/todos/${id}`, {text: text, done: !done})
}

