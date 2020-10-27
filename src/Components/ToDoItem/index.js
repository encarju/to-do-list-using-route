import React, { Component } from 'react';
import './index.css'


class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }
    

    onMarkAsDone = () =>{
        this.props.revertStatus(this.props.todo.id);
    
    }

    render() {
    
        return (
            <li>
                <span onClick={this.onMarkAsDone} className={this.props.todo.done ? "true" : "false"}>{this.props.todo.text}</span>
                <button>x</button>
            </li>
        );
    }
}

export default ToDoItem;