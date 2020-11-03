import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware} from 'redux';
import logger from './logger';

const red = (state = {val:0, int:0}, action) => {
  switch (action.type) {
  case "INCREMENT":
    return {...state,
      val: state.val + Number(1)
    };
  case "DECREMENT":
    return {...state,
      val: state.val - Number(1)
    };
  case "START":
    return state;
  case "STOP":
    return state;
  case "INT":
    return {
      ...state, 
      int: action.int
    }
  default:
    return state;
  }
    
}

const store = createStore(red, applyMiddleware(logger))

const render = () => ReactDOM.render(
    <App dispatch={store.dispatch} state={store.getState()} />,
  document.getElementById('root')
);

render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
