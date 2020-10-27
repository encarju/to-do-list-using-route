import React, { Component } from 'react';

class ToDoGenerator extends Component {

    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={this.onClick}>add</button>
            </div>
        );
    }
}

export default ToDoGenerator;