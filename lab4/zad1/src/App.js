import './App.css';
import { createStore } from 'redux'
import Lista from './lista';

const store = createStore(red)

function red(state={counters: []}, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counters: [...state.counters, 0]
      }
    case "INCREMENT":
      let newVal = state.counters;
      newVal[action.ind] += 1;
      return {
        ...state, 
        counters: newVal
      }
    case "DECREMENT":
      let newVal2 = state.counters;
      newVal2[action.ind] -= 1;
      return {
        ...state, 
        counters: newVal2
      }
    default:
      return state;
  }
}


function App() {
  return (
    <div className="App">
      {console.log(store.getState().counters)}
      <Lista state={store.getState().counters}
      add={() => store.dispatch({type: 'ADD'})}
      inc={(ind) => store.dispatch({type: 'INCREMENT', ind: ind})}
      dec={(ind) => store.dispatch({type: 'DECREMENT', ind: ind})}></Lista>
    </div>
  );
}

store.subscribe(App)

export default App;
