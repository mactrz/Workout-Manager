import './App.css';

function App({state, dispatch}) {
  return (
    <div className="App">
      <div>{state.val}</div>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
      <button onClick={() => dispatch({type: "START"})}>START</button>
      <button onClick={() => dispatch({type: "STOP"})}>STOP</button>
    </div>
  );
}

export default App;
