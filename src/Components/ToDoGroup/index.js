import React, { Component } from 'react';
import ToDoItemContainer from '../../Container/ToDoItemContainer';

class ToDoGroup extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <ToDoItemContainer key={todo.id} todo={todo}/>
                ))}
            </ul>
        );
    }
}

export default ToDoGroup;