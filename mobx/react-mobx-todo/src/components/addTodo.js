import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddTodo extends React.Component {

  // 添加任务
  addTodo(e) {
    const { todoAdd }  = this.props.todo
    // 判断用户敲击的是否是回车键
    if (e.key === 'Enter') {
      // 获取输入的任务名称
      const taskName = e.target.value
      // 输入内容是否为空
      if (taskName.trim().length === 0) {
        return
      }
      todoAdd(taskName)
      // 清空输入框
      e.target.value = ''
    }
  }

  render () {
    return (
      <header className="header">
				<h1>todos</h1>
				<input
          onKeyUp={this.addTodo.bind(this)}
          className="new-todo"
          placeholder="What needs to be done?"
        />
			</header>
    )
  }
}

export default AddTodo