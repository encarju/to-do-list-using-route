import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem/';
import ToDoGroup from './Components/ToDoGroup';

function App() {
  const todo = [{id: '123', text:'Test', done: false},
                {id: '124', text:'Test2', done: true}];
  return (
    <div className="App">
      <header className="App-header">
        <ToDoGroup todo={todo}/>
      </header>
    </div>
  );
}

export default App;
