import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ToDoGenerator extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const text = event.target.toDoText.value;
        const id = uuidv4();
        const todo = { text, done: false, id }
        this.props.addToDo(todo);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="toDoText" id="toDoText" />
                    <input type="submit" value="Add Todo Item"/>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;