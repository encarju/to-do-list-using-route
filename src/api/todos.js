import api from './api';

export const getTodos = () => {
    return api.get('/api/todos')
}

export const addTodo = (text) => {
    return api.post('/api/todos',{text})
}

export const deleteToDo = (id) =>{
    return api.delete(`/api/todos/${id}`)
}

export const updateToDo = (id,todoStatus)  =>{
    return api.put(`/api/todos/${id}`, {done: !todoStatus})
}

