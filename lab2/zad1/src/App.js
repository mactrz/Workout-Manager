import React, { useState } from 'react';
import './App.css';

function App() {

  const [liczniki, changeLiczniki] = useState([]);

  return (
    <div className="App">
      <button onClick={() => changeLiczniki(l => [...l, {wartosc: 0, oile: 1}])}>Dodaj Licznik</button>
      <div>
        {liczniki.map((x,ind) => {
          return(
            <div style={{border: "2px solid black", width: '200px', margin: 'auto'}}>
              <div>{x.wartosc}</div>
              
              <button onClick={() => changeLiczniki(l => l.reduce((prev, curr, inde) => {
                if (inde === ind) return [...prev, {wartosc: curr.wartosc+Number(curr.oile), oile: curr.oile}];
                else return [...prev, curr];
              }, []))}>+</button>
              
              <button onClick={() => changeLiczniki(l => l.reduce((prev, curr, inde) => {
                if (inde === ind) return [...prev, {wartosc: curr.wartosc-curr.oile, oile: curr.oile}];
                else return [...prev, curr];
              }, []))}>-</button><br/>


              <label>O ile?<input onChange={(e) => {
                const zmiana = e.target.value;
                changeLiczniki(l => {
                  return l.reduce( (prev, curr, inde) => {
                    console.log(zmiana)
                    if (inde === ind) return [...prev, {wartosc: curr.wartosc, oile: zmiana}];
                    else return [...prev, curr];
                  }, [])
                })
              }}></input></label>
              <br/>
              <button onClick={() => changeLiczniki(l => l.filter((val, inde) => {
                return inde !== ind;
              }))}>Usuń</button>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
