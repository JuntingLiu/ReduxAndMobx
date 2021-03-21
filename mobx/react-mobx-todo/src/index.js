import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import App from './App';
import todo from './store/TodoStore'

import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider todo={todo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
