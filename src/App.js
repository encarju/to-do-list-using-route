import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem/';

function App() {
  const todo = {id: '123', text:'Test', done: false};
  return (
    <div className="App">
      <header className="App-header">
        <ToDoItem todo={todo}/>
      </header>
    </div>
  );
}

export default App;
