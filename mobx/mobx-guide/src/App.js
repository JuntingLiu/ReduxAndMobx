import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
class App extends React.Component {
  render () {
    const { counter } = this.props

    return (
      <div className="App">
        <button onClick={counter.increment}>+</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-</button>
      </div>
    );
  }
}

export default App;
