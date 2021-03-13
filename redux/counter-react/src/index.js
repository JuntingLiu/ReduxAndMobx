import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import Counter from './components/Counter'
import Modal from './components/Modal'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Counter />
      <Modal />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
