import './App.css';
import { connect } from 'react-redux';
import { get, post, put, del } from './actions/actions';
import { useState } from 'react';
import { Post } from './postform';
import { Put } from './putform';


function App({state, gett, post, put, del}) {

  const [disp, changeDisp] = useState(false);
  const [dele, changeDel] = useState(null);

  
  return (
    <div className="App">
      <button onClick={gett}>GET</button><br/>
      <Post post={post}></Post>
      <Put put={put}></Put>
      <div style={{border:'2px black solid', margin:'auto', width:'50%'}}>
        <label>Id: <input onChange={(e) => changeDel(e.target.value)}></input></label><br/>
        {dele !== null && <button onClick={() => del(dele)}>DELETE</button>}
      </div>
      <button onClick={() => changeDisp(x => !x)}>Show Todos</button>
      {disp && <div>
        {state.map(x => {
          return(<div key={x.id} style={{border:'2px black solid', width:'50%', margin:'auto'}}>
            <div>User Id: {x.userId}</div>
            <div>Id: {x.id}</div>
            <div>Title: {x.title}</div>
            Done:<input readOnly={true} type='checkbox' checked={x.completed}></input></div>)
        })}
      </div>}
    </div>
  );
} 

const mapStateToProps = (state) => {
  console.log(state)
  return {
    state: state.reducer
  }
}

export default connect(mapStateToProps, {gett: get, post, put, del})(App);
