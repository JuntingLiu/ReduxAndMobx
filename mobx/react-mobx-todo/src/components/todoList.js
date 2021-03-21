import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoList extends React.Component {

  render () {
    const { filterTodos, todoDelete, changeCompleted } = this.props.todo
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            filterTodos.map((task, index) => (
              <li className={ task.isCompleted ? 'completed' : ''} key={index}>
                <div className="view">
                  <input checked={task.isCompleted} onChange={(e) => changeCompleted(index, e.target.checked) } className="toggle" type="checkbox" />
                  <label>{task.taskName}</label>
                  <button onClick={() => todoDelete(index)} className="destroy"></button>
                </div>
                <input className="edit"/>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}

export default TodoList