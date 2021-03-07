import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment = () => {
    let count = this.state.count
    // count++
    this.setState({
      count: count + 1
    })
  }

  decrement = () => {
    let count = this.state.count
    // count--
    this.setState(
      {
        count: count - 1
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter