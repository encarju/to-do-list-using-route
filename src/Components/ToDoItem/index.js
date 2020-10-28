import React, { Component } from 'react';
import './index.css'
import { deleteToDo } from '../../api/todos';

class ToDoItem extends Component {
    onMarkAsDone = () =>{
        this.props.revertStatus(this.props.todo.id);
    }

    onRemoveItem = () =>{
        deleteToDo(this.props.todo.id).then(response => {
            this.props.deleteToDo(response.data.id);
        })
        
    }

    render() {
    
        return (
            <li  onClick={this.onMarkAsDone} className={this.props.todo.done ? "true" : "false"}>
                <span>{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </li>
        );
    }
}

export default ToDoItem;