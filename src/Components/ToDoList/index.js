import React, { Component } from 'react';
import ToDoGeneratorContainer from '../../Container/ToDoGeneratorContainer';

class ToDoList extends Component {
    
    render() {
        return (
            <div>
                <ToDoGeneratorContainer/>
                {/* <ToDoGroup todos={todos}/> */}
            </div>
        );
    }
}

export default ToDoList;