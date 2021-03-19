import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import App from './App';
import counter from './stores/counterStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider counter={counter}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
