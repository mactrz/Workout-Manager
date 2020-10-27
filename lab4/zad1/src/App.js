import './App.css';
import { createStore } from 'redux'

const store = createStore(red)

function red(state={counters: []}, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counters: [...state.counters, 0]
      }
    default:
      return state;
  }
}


function App() {
  return (
    <div className="App">
      <button onClick={() => store.dispatch({type: 'ADD'})}>Dodaj licznik</button>
      <div>
        {store.getState().counters.map((x) => {
          return (
            <div>
              <button>{x}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

store.subscribe(App)

export default App;
