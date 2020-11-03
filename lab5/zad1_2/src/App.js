import './App.css';
import Lista from './lista';





function App({counters, dispatch}) {
  return (
    <div className="App">
      <Lista state={counters}
      amount={(ind, amount) => dispatch({type: 'AMOUNT', ind: ind, amount: amount})}
      add={() => dispatch({type: 'ADD'})}
      inc={(ind) => dispatch({type: 'INCREMENT', ind: ind})}
      start={(ind) => dispatch({type: 'COUNT', ind: ind})}
      stop={(ind) => dispatch({type: 'STOP', ind: ind})}
      dec={(ind) => dispatch({type: 'DECREMENT', ind: ind})}></Lista>
    </div>
  );
}


export default App;
