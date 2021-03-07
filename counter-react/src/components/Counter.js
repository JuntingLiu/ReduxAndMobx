import React from 'react'
import { connect } from 'react-redux'

function Counter (props) {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const increment = () => ({ type: 'increment'})
const decrement = () => ({ type: 'decrement'})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)