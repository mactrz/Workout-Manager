import './App.css';
import Forma from './Form';
import Forma2 from './Form2';
import { connect } from 'react-redux';
import change from './actions/dispActions';
import changea from './actions/allActions';
import remove from './actions/dispActions';
import removea from './actions/allActions';
import add from './actions/dispActions';
import adda from './actions/allActions';
import search from './actions/dispActions';
import reset from './actions/dispActions';

function App({disp, onChange1, onRemove, onAdd, onSearch, onReset, all}) {
  return (
    <div className="App">
      <div>SEARCH</div>
      <Forma2 reset={onReset} search={onSearch} all={all}></Forma2>
      <br/><br/><br/>
      <div>ADD</div>
      <Forma add={onAdd}></Forma>
      <table style={{margin: "auto"}}>
        <tbody>
          {disp.length > 0 && <tr><th>To-Do</th><th>Date</th><th>Done?</th><th> </th></tr>}
          {disp.length > 0 && disp.map((x, ind) => {
            return (<tr key={ind}><th>{x.text}</th><th>{x.date}</th><th>{x.done && <input type='checkbox' readOnly={true} checked={true}></input>}
            {!x.done && <input type='checkbox' onChange={() => onChange1(ind)}></input>}</th>
            {!x.done && <th><button onClick={() => onRemove(ind)}>DELETE</button></th>}{x.expired && <th>EXPIRED</th>}</tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    disp: state.Disp,
    all: state.All
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange1: (ind) => {
      dispatch(change(ind));
      dispatch(changea(ind));
    },
    onRemove: (ind) => {
      dispatch(remove(ind));
      dispatch(removea(ind));
    },
    onAdd: (payload) => {
      dispatch(add(payload));
      dispatch(adda(payload));
    },
    onSearch: (payload) => {
      dispatch(search(payload));
    },
    onReset: (payload) => {
      dispatch(reset(payload))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
