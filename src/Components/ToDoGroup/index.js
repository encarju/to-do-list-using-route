import React, { Component } from 'react';
import ToDoItemContainer from '../../Container/ToDoItemContainer';

class ToDoGroup extends Component {
    
    render() {
        const todos = this.props.todos.map((todo) => (
            <ToDoItemContainer key={todo.id} todo={todo}/>
        ));
        return (
            <div className="todogroup">
            <ul className="striped-list">
                {todos}
            </ul>
            </div>
        );
    }
}

export default ToDoGroup;