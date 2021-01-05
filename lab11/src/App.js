import './App.css';
import { connect } from 'react-redux';
import  Forma  from './Form';

function App({blog, add}) {
  return (
    <div className="App">
      <Forma add={add}></Forma>
      {blog.map((x, ind) => {
        return(<div key={ind} style={{border:'1px solid black', margin: 'auto'}}>
          <div>Title: {x.Title}</div>
          <div>{x.Content}</div>
          <div>{x.PublicationDate}</div>
          <div>{x.Category}</div>
        </div>)
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    blog: state
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    add: (payload) => {
      dispatch({type: 'ADD', payload: payload})
    }
  }
}

export default connect(mapStateToProps,mapDistpatchToProps)(App);
