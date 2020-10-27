import React, { Component } from 'react';
import './index.css'


class ToDoItem extends Component {
    onMarkAsDone = () =>{
        this.props.revertStatus(this.props.todo.id);
    }

    onRemoveItem = () =>{
        this.props.deleteToDo(this.props.todo.id);
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