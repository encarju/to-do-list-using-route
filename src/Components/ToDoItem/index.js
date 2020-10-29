import React, { Component } from 'react';
import './index.css'
import { deleteToDo, updateToDo } from '../../api/todos';
import {List} from 'antd'

class ToDoItem extends Component {
    onMarkAsDone = () => {
        updateToDo(this.props.todo).then(response => {
            this.props.revertStatus(response.data.id);
        })

    }

    onRemoveItem = () => {
        deleteToDo(this.props.todo.id).then(response => {
            this.props.deleteToDo(this.props.todo.id);
        })

    }

    render() {

        return (
            <div className="todoitem">
            <List.Item >
                <span onClick={this.onMarkAsDone} id="todo" className={this.props.todo.done ? "true" : "false"} >{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </List.Item>
            </div>
        );
    }
}

export default ToDoItem;