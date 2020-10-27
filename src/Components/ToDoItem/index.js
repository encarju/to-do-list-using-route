import React, { Component } from 'react';
import './index.css'

class ToDoItem extends Component {
    render() {
    
        return (
            <li>
                <span className={this.props.todo.done ? "true" : "false"}>{this.props.todo.text}</span>
                <button>x</button>
            </li>
        );
    }
}

export default ToDoItem;