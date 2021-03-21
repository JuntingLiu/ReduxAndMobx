import React from 'react'

import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import TodoExtra from './components/todoExtra'
import './index.css'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <TodoExtra />
    </div>
  );
}

export default App;
