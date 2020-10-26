import React, {useState, useEffect} from 'react';
import './App.css';
import Forma from './Form';
import Lista from './lista';

function App() {
  const [przesylany, zmiana] = useState({});
  const [listaDruk, changeLista] = useState([]);
  const [time, changeTime] = useState("");
  const [status, changeStatus] = useState("");
  const [wpisany, changeWpisany] = useState("");
  const [postatusie, changePo] = useState([]);

  useEffect(() => {
    setInterval(() => changeTime(new Date()), 1000)
  },[])


  function handleClick() {
    if (status === '') {
      changePo(listaDruk);
    }
    else if (status === 'ToDo') {
      changePo(listaDruk.filter(x => x.done === false && x.expired === false))
    }
    else if (status === 'Done') {
      changePo(listaDruk.filter(x => x.done === true))
    }
    else {
      changePo(listaDruk.filter(x => x.expired === true))
    }

    if (wpisany !== '') {
      const reg = new RegExp(wpisany.toLowerCase()+'.*');
        changePo(l => l.filter(x => {
          return reg.test(x.text.toLowerCase());
        }))
    }
  }

  useEffect(() => {
    changeLista(l => {
      return l.reduce((prev, curr) => {
        if (Date.parse(curr.date) === Date.parse(time)) return [...prev, {...curr, expired: true}];
        else return [...prev, curr];
      }, [])
    })
  },[time])


  useEffect(() => {
    if(przesylany.text !== undefined) {
      changeLista(l => {
        changePo([...l, przesylany])
        return [...l, przesylany];
      });
    }
  }, [przesylany])


  return (
    <div className="App">
      <label>Staus:
      <select value={status} onChange={(e) => changeStatus(e.target.value)}>
        <option value=''>Status</option>
        <option value="ToDo">To-do</option>
        <option value="Done">Wykonane</option>
        <option value="Expired">Expired</option>
      </select>
      </label><br/>
      <label>Treść:<input value={wpisany} type="text" onChange={(e) => changeWpisany(e.target.value)}></input></label><br/>
      <button onClick={handleClick}>Wyszukaj</button><br/><br/>
      <Forma zmiana={zmiana}></Forma>
      <Lista todos={listaDruk} zmianato={changeLista} wpisany={wpisany} status={status} postatusie={postatusie}/>
      <div>{time.toLocaleString()}</div>
    </div>
  );
}

export default App;
