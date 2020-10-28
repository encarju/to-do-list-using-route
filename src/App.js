import './App.css';
import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import DoneListContainer from "./Container/DoneListContainer"
import { getTodos } from './api/todos';
import {connect} from 'react-redux';
import {initTodos} from './actions';
import NotFound from './Components/NotFound'



class App extends Component {
  
  componentDidMount() {
    getTodos().then(
      response => {
        this.props.initTodos(response.data)
      }
    )
  }

  componentWillMount() {
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
              <Switch>
              <Route path="/done" component={DoneListContainer} />
              <Route exact path="/" component={ToDoList} />
              <Route path="*" component={NotFound}/>
              </Switch>
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
