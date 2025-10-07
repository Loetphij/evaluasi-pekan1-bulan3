import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import TodoFilter from './components/TodoFilter.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("All")
  
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false}
    setTodos(prev => [...prev, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed
    if (filter === "Completed") return todo.completed
    return true
  })

  return (
    <div className='app'>
      <h1>React Todo App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoFilter currentFilter={filter} setFilter={setFilter}/>
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
