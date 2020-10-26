import './App.css';
import React, {useState} from 'react';


// Niestety nie udało mi się osiągnąć zamieżanego efektu a w moich eksperymentach dotarłem najdalej tutaj.

function App() {

  const [wartosc, changeWartosc] = useState(0);

  function reducer(state, action) {
    console.log(state.val)
    switch(action) {
      case {type: 'Increment'}:
        return {...state, val: state.val + 1};
      case {type: 'Decrement'}:
        return {...state, val: state.val -1};
      default:
        return state;
    }
  }
  const Dodaj = {type: 'Increment'};
  const Odejmij = {type: 'Decrement'};

  function createStore(reducer, state) {
    let state1 = state
    function dispatch(action) {
      return state1 = reducer(state, action);
    }
    return {dispatch, state1}
  }

  const store = createStore(reducer, {val: wartosc});

  function Store({store}) {
    

    return(
      <div>
        <div></div>
      </div>
    );
  }



  return (
    <div className="App">
      <div>{store.state1.val}</div>
      <button onClick={() => store.dispatch(Dodaj)}>+</button>
      <button onClick={() => store.dispatch(Odejmij)}>-</button>
    </div>
  );
}

export default App;


