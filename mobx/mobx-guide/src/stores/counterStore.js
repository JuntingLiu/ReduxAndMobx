import { observable, makeObservable, action, runInAction, configure, flow, makeAutoObservable } from 'mobx'
import axios from 'axios'

// 通过配置强制程序使用 action 函数更改应用程序中的状态
configure({ enforceActions: 'observed' })

class Counter {
  // 设置可观察属性 count
  count = 0
  users = []

  constructor() {
    // MobX V6 版本以上，需要添加下面这行代码，不然视图不会更新
    // 统一在构造函数中，声明可观察属性和绑定方法指向
    makeObservable(this, {
      count: observable,
      users: observable,
      increment: action.bound,
      decrement: action.bound,
      getData: action.bound
    })
    // makeAutoObservable(this)
  }

  // 类方法 => 普通函数，需要更正绑定
  increment () {
    this.count = this.count + 1
  }

  decrement () {
    this.count = this.count - 1
  }

  async getData() {
    const { data } = await axios.get('https://api.github.com/users')
    // 当前有异步操作，需要通过 runInAction 中回调函数中变更 users
    runInAction(() => {
      this.users = data
    })
  }

  // 另一种处理 异步的方式
  // getData = flow(function* () {
  //   const { data } = yield axios.get('https://api.github.com/users')
  //   this.users = data
  // }).bind(this)
}

const counter = new Counter()

export default counter