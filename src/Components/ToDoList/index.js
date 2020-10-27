import React, { Component } from 'react';
import ToDoGenerator from '../ToDoGenerator';
import ToDoGroup from '../ToDoGroup';

class ToDoList extends Component {
    
    render() {
        return (
            <div>
                <ToDoGenerator/>
                {/* <ToDoGroup todos={todos}/> */}
            </div>
        );
    }
}

export default ToDoList;