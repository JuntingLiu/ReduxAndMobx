import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
class App extends React.Component {
  componentDidMount() {
    const { getData } = this.props.counter
    getData()
  }

  render () {
    const { counter } = this.props

    return (
      <div className="App">
        <button onClick={counter.increment}>+</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-</button>
        <br/>
        <input type="text" value={counter.username} onChange={(e) => counter.changeUsername(e.target.value)}/>
        {counter.username}
        <br/>
        {
          counter.users.map(user => (
            <p key={user.id}>{user.id} - {user.login}</p>
          ))
        }
      </div>
    );
  }
}

export default App;
