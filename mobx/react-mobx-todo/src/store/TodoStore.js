import { observable, action, computed } from "mobx"

class TodoStore {
  // 待做任务列表
  @observable todos = []
  // 筛选条件
  @observable filter = 'All'

  // 添加任务
  @action.bound
  todoAdd (taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }

  // 删除任务
  @action.bound
  todoDelete(index) {
    this.todos.splice(index, 1)
  }

  // 更改任务状态
  @action.bound
  changeCompleted(index, flag) {
    this.todos[index].isCompleted = flag
  }

  // 未完成任务的数量（计算值）
  @computed
  get unfinishedTodoCount () {
    return this.todos.filter(todo => !todo.isCompleted).length;
  }

  // 更改筛选条件
  @action.bound
  changeFilter(condition) {
    this.filter = condition
  }

  // 监测筛选条件的变化，根据筛选条件进行筛选
  @computed
  get filterTodos () {
    switch(this.filter) {
      case 'All':
        return this.todos
      case 'Active':
        return this.todos.filter(todo => !todo.isCompleted)
      case 'Completed':
        return this.todos.filter(todo => todo.isCompleted)
      default:
        return []
    }
  }
  // 清空已完成的任务
  @action.bound
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.isCompleted)
  }
}

const todo = new TodoStore()

export default todo