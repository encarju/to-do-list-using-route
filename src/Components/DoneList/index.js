import React, { Component } from 'react';

class DoneList extends Component {
    
    render() {
        const todos = this.props.todos.map((todo) => (
            <li>{todo.text}</li>
        ));
        return (
            <ul className="striped-list">
                {todos}
            </ul>
        );
    }
}

export default DoneList;