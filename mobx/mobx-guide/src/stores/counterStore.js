import { observable, makeAutoObservable, action } from 'mobx'

class Counter {
  // 设置可观察属性 count
  @observable count = 0

  constructor() {
    // MobX V6 版本以上，需要添加下面这行代码，不然视图不会更新
    makeAutoObservable(this)
  }

  @action increment = () => {
    this.count = this.count + 1
  }

  @action decrement = () => {
    this.count = this.count - 1
  }
}

const counter = new Counter()

export default counter