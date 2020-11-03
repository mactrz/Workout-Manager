import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import logger from './middleware/logger';

const store = createStore(red, applyMiddleware(logger));

function red(state={counters: []}, action) {
  switch (action.type) {
    case "COUNT":
      return state;
    case "STOP":
      return state;
    case "DEC1":
      let newVal4 = [...state.counters];
      newVal4[action.ind]['value'] -= 1;
      return {
        ...state,
        counters: newVal4
      }
    case "ADD":
      return {
        ...state,
        counters: [...state.counters, {value: 0, amount: 1}]
      }
    case "INCREMENT":
      let newVal = [...state.counters];
      newVal[action.ind]['value'] += Number(newVal[action.ind]['amount']);
      return {
        ...state, 
        counters: newVal
      }
    case "DECREMENT":
      let newVal2 = [...state.counters];
      newVal2[action.ind]['value'] -= Number(newVal2[action.ind]['amount']);
      return {
        ...state, 
        counters: newVal2
      }
    case "AMOUNT":
      let newVal3 = [...state.counters];
      newVal3[action.ind]['amount'] = action.amount;
      return {
        ...state,
        counters: newVal3
      }
    default:
      return state;
  }
}
 
const render = () => ReactDOM.render(
    <App counters={store.getState().counters} dispatch={store.dispatch}/>,
    document.getElementById('root')
);


render();
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
