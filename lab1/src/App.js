import React, {useState, useEffect} from 'react';
import './App.css';
import Forma from './Form';
import Lista from './lista';

function App() {
  const [przesylany, zmiana] = useState({});
  const [listaDruk, changeLista] = useState([])
  useEffect(() => {
    if(przesylany.text !== undefined) {
      changeLista(l => [...l, przesylany])
    }
  }, [przesylany])
  return (
    <div className="App">
      <Forma zmiana={zmiana}></Forma>
      <Lista todos={listaDruk} zmianato={changeLista}/>
    </div>
  );
}

export default App;
