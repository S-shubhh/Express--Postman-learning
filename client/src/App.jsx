import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "back day"
  }, {
    title: "go to college",
    description: "There will be RTS Classes"
  }])

  function addTodo() {
    setTodos([...todos, {
      title: "new rtodo",
      description: "hey guys"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}></button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  )
}
export default App;
