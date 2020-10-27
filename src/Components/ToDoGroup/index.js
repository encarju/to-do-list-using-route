import React, { Component } from 'react';
import ToDoItem from '../ToDoItem';

class ToDoGroup extends Component {
    render() {
        return (
            <ul>
                {this.props.todo.map((value) => (
                    <ToDoItem todo={value}/>
                ))}
            </ul>
        );
    }
}

export default ToDoGroup;