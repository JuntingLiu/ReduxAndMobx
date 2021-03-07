import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import Counter from './components/Counter'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
