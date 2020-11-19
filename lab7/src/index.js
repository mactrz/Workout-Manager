import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const countries = [ 
  { name: 'Poland', id: 0, population: '37 milion',  surface: '312 679 km' }, 
  { name: 'Japan', id: 1, population: '126,5 milion',  surface: '377 915 km'}, 
  { name: 'USA', id: 2 , population: '328 milion', surface: '9 834 000 km'} ]

const red = (state=countries, action) => {
  console.log(state)
  switch(action.type) {
    case('EDIT'):
      const newState = state.map(x => {
        return (x.id === Number(action.id)) ? {...x, ...action.payload} : x;
      });
      return newState;
    default:
      return state;
  }
}

const store = createStore(red);

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
