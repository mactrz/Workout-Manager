import React, {useState, useEffect} from 'react';
import './App.css';
import Forma from './Form';

function App() {
  const [przesylany, changePrzesylany] = useState([]);
  return (
    <div className="App">
      <Forma changePrzesylany={changePrzesylany}></Forma>
    </div>
  );
}

export default App;
