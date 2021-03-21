import React from 'react'
import { inject, observer } from 'mobx-react'

import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import TodoExtra from './components/todoExtra'

@inject('todo')
@observer
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <section className="todoapp">
          <AddTodo />
          <TodoList />
          <TodoExtra />
        </section>
      </div>
    );
  }
}

export default App;
