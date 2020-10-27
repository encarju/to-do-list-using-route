import React, { Component } from 'react';
import ToDoGeneratorContainer from '../../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../../Container/ToDoGroupContainer';

class ToDoList extends Component {
    
    render() {
        return (
            <div>
                <ToDoGeneratorContainer/>
                <ToDoGroupContainer/>
            </div>
        );
    }
}

export default ToDoList;