import React, { Component } from 'react';
import ToDoItem from '../ToDoItem';

class ToDoGroup extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo}/>
                ))}
            </ul>
        );
    }
}

export default ToDoGroup;