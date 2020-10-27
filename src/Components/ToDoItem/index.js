import React, { Component } from 'react';
import './index.css'


class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }
    

    onMarkAsDone = () =>{
        this.props.revertStatus(this.props.todo.id);
    
    }

    onRemoveItem = () =>{
        this.props.deleteToDo(this.props.todo.id);
    }

    render() {
    
        return (
            <div>
                <span onClick={this.onMarkAsDone} className={this.props.todo.done ? "true" : "false"}>{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </div>
        );
    }
}

export default ToDoItem;