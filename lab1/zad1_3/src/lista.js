import React, {useState} from 'react';


function Lista({todos, zmianato, wpisany, status, postatusie}) {



  function handleClick(e, ind) {
    zmianato(l => {
      return l.filter((x, inde) => {
        return ind !== inde;
        })
      }
      );
  }


  function handleChange(e, ind) {
    if (e.target.checked) {
      zmianato(l => l.reduce((prev, curr, inde) => {
        if (inde === ind) return [...prev, {...curr, done: true}];
        else return [...prev, curr];
      },[]))
    }
  }


    return(
        <table style={{margin: "auto"}}>
        <tbody>
          {todos.length > 0 && <tr><th>To-Do</th><th>Data</th><th>Wykonane?</th><th> </th></tr>}
          {wpisany.length === 0 && status.length === 0 && todos.map((x, ind) => {
            return <tr key={ind}><th>{x.text}</th><th>{new Date(x.date).toLocaleString()}</th><th><input type="checkbox" onChange={e => handleChange(e, ind)}></input></th>{!x.done && <th><button id={ind} onClick={e => handleClick(e, ind)}>Usun</button></th>}{x.expired === true && <th>
              Po terminie!</th>}</tr>
          })}
          {(wpisany.length > 0 || status.length > 0) && postatusie.map((x, ind) => {
            return <tr key={ind}><th>{x.text}</th><th>{new Date(x.date).toLocaleString()}</th><th><input type="checkbox" onChange={e => handleChange(e, ind)}></input></th>{!x.done && <th><button id={ind} onClick={e => handleClick(e, ind)}>Usun</button></th>}{x.expired === true && <th>
              Po terminie!</th>}</tr>
          })}
        </tbody>
        </table>
    )
}

export default Lista;