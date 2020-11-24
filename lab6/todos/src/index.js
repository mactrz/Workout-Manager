import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import All from './reducers/allReducer';
import Disp from './reducers/dispReducer';
import time from './actions/dispActions';
import timea from './actions/allActions';

const rootReducer = combineReducers({All, Disp});

console.log(Disp)

const timeChange = () => {
  store.dispatch(time.time())
  store.dispatch(timea.timea())
}


const store = createStore(rootReducer)

setInterval(timeChange, 1000)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
