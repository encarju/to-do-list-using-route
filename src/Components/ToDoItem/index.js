import React, { Component } from 'react';
import './index.css'
import { deleteToDo, updateToDo } from '../../api/todos';

class ToDoItem extends Component {
    onMarkAsDone = () => {
        updateToDo(this.props.todo.id, this.props.todo.done).then(response => {
            this.props.revertStatus(response.data.id);
        })

    }

    onRemoveItem = () => {
        deleteToDo(this.props.todo.id).then(response => {
            this.props.deleteToDo(response.data.id);
        })

    }

    render() {

        return (
            <li onClick={this.onMarkAsDone} className={this.props.todo.done ? "true" : "false"}>
                <span>{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </li>
        );
    }
}

export default ToDoItem;