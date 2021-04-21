import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import counterReducers from '../src/redux/counterReducers';
import colorReduser from '../src/redux/colorReduser';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = combineReducers({ counterReducers, colorReduser })
const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
