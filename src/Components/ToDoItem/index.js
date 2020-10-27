import React, { Component } from 'react';
import './index.css'

class ToDoItem extends Component {
    render() {
        const { text, done, id } = this.props.todo;
        return (
            <li>
                <span className={done ? "true" : "false"}>{text}</span>
                <button>x</button>
            </li>
        );
    }
}

export default ToDoItem;