import './App.css';
import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DoneListContainer from "./Container/DoneListContainer"
import { getTodos } from './api/todos';
import {connect} from 'react-redux';
import {initTodos} from './actions'


class App extends Component {
  
  componentDidMount() {
    getTodos().then(
      response => {
        this.props.initTodos(response.data)
      }
    )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <React.Fragment> */}
            <BrowserRouter>
              <ul>
                <li>
                  <Link to="/" >Go to List Page</Link>
                </li>
                <li>
                <Link to="/done" >Go to Done Page</Link>
                </li>
              </ul>
  
              <Route exact path="/" component={ToDoList} />
              <Route path="/done" component={DoneListContainer} />
  
            </BrowserRouter>
          {/* </React.Fragment> */}
        </header>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
    initTodos: todos => dispatch(initTodos(todos))
})


export default connect(null,mapDispatchToProps)(App);
