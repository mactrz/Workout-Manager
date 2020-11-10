import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

const reducer = (state={disp: [], all: []}, action) => {
  switch(action.type) {
    case('ADD'):
      return {
        ...state,
        disp: [...state.disp, action.payload],
        all: [...state.all, action.payload]
      }
    case('REMOVE'):
      return {
        ...state,
        disp: state.disp.filter((x, ind) => ind !== action.index ),
        all: state.all.filter((x, ind) => ind !== action.index)
      }
    case('CHANGE'):
      let Val1 = [...state.disp]
      Val1[action.index].done = true;
      let Val2 = [...state.all]
      Val2[action.index].done = true;
      return {
        ...state,
        disp: Val1,
        all: Val2
      }
    case('TIME'):
      const time = new Date()
      const fileterd1 = state.disp.reduce((prev, curr) => {
        if (Date.parse(curr.date) === Date.parse(time)) return [...prev, {...curr, expired:true}]
        else return [...prev, curr]
      }, [])
      const fileterd2 = state.all.reduce((prev, curr) => {
        if (Date.parse(curr.date) === Date.parse(time)) return [...prev, {...curr, expired:true}]
        else return [...prev, curr]
      }, [])
      return {
        ...state,
        disp: fileterd1,
        all: fileterd2
      }
      case('SEARCH'):
        const text = action.payload.text;
        const status = action.payload.status;
        let disp = [...state.disp];
        switch(status) {
          case('expired'):
            disp = disp.filter(x => x.expired === true);
            break;
          case('done'):
            disp = disp.filter(x => x.done === true);
            break
          case('active'):
            disp = disp.filter(x => !x.expired && !x.done);
            break
          default:
            break
          }
        if(text !== '') {
          const reg = new RegExp('^'+text.toLowerCase()+'.*');
          disp = disp.filter(x => {
            console.log(x.text.toLowerCase())
            return reg.test(x.text.toLowerCase())
          })
        }
        console.log(disp);
        return {
          ...state,
          disp: disp
        }
    case('RESET'):
      return {
        ...state,
        disp: state.all
      }
    default:
      return state;
  }
}

setInterval(() => store.dispatch({type: 'TIME'}), 1000)


const store = createStore(reducer)

const rend = () => ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch}/>,
  document.getElementById('root')
);

rend();

store.subscribe(rend);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
