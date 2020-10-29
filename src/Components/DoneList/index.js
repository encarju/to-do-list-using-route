import React, { Component } from 'react';
import { List, Typography, Divider } from 'antd';

class DoneList extends Component {

    render() {
        const todos = this.props.todos.map((todo) => (
            <li>{todo.text}</li>
        ));
        return (
            <div>
                <h1>Done To Do List</h1>
                <List
                    bordered
                    dataSource={todos}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;