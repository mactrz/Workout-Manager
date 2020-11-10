import './App.css';
import Forma from './Form';
import Forma2 from './Form2';

function App({state, dispatch}) {
  return (
    <div className="App">
      <div>SEARCH</div>
      <Forma2 dispatch={dispatch}></Forma2>
      <br/><br/><br/>
      <div>ADD</div>
      <Forma dispatch={dispatch}></Forma>
      <table style={{margin: "auto"}}>
        <tbody>
          {state.disp.length > 0 && <tr><th>To-Do</th><th>Date</th><th>Done?</th><th> </th></tr>}
          {state.disp.length > 0 && state.disp.map((x, ind) => {
            return (<tr key={ind}><th>{x.text}</th><th>{x.date}</th><th>{x.done && <input type='checkbox' readOnly={true} checked={true}></input>}
            {!x.done && <input type='checkbox' onChange={() => dispatch({type: 'CHANGE', index: ind})}></input>}</th>
            {!x.done && <th><button onClick={() => dispatch({type: 'REMOVE', index: ind})}>DELETE</button></th>}{x.expired && <th>EXPIRED</th>}</tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
