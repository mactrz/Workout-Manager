import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';





function App({ workouts }) {

  return (
    <div className="App">
      {workouts.map((x, ind) => <div key={ind}>{x}</div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(App);
