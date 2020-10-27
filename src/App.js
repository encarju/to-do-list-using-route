import './App.css';
import ToDoGroup from './Components/ToDoGroup';
import ToDoList from './Components/ToDoList';

function App() {
  const todos = [{id: '123', text:'Test', done: false},
                {id: '124', text:'Test2', done: true}];
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
