import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import store from './store';

import App from './app';

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
