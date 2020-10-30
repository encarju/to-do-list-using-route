import React, { Component } from 'react';
import ToDoGeneratorContainer from '../../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../../Container/ToDoGroupContainer';
import { Col, Row } from 'antd';

class ToDoList extends Component {

    render() {
        return (
            <div id="toDoList">
                <div>
                    <Row>
                        <Col span={16} offset={4}>
                        <h1>To Do List</h1>
                            <ToDoGeneratorContainer />
                            <ToDoGroupContainer />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ToDoList;