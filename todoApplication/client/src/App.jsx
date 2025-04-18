import { useState, useEffect } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(err => {
        console.error("Error fetching todos:", err);
      });
  }, []); 

  return (
    <div>
      <CreateTodo></CreateTodo>
      <br />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;