import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoExtra extends React.Component {
  render () {
    const { unfinishedTodoCount, filter, changeFilter, clearCompleted } = this.props.todo
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{ unfinishedTodoCount }</strong> item left</span>
        <ul className="filters">
          <li>
            <button onClick={() => changeFilter('All')} className={ filter === 'All' ? 'selected' : ''}>All</button>
          </li>
          <li>
            <button onClick={() => changeFilter('Active')} className={ filter === 'Active' ? 'selected' : ''}>Active</button>
          </li>
          <li>
            <button onClick={() => changeFilter('Completed')} className={ filter === 'Completed' ? 'selected' : ''}>Completed</button>
          </li>
        </ul>
        <button onClick={() => clearCompleted()} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default TodoExtra