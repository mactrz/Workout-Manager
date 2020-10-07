import React, {useState} from 'react';


function Lista({todos, zmianato}) {

  const [checked, changeChecked] = useState([]);


  function handleClick(e, ind) {
    if(checked.indexOf(ind) === -1)
      zmianato(l => l.splice(ind, 1));
  }


  function handleChange(e, ind) {
    if (e.target.checked) {
      changeChecked([...checked, ind])
    }
    else {
      changeChecked(l => l.splice(l.indexOf(ind),1))
    }
    console.log(checked)
  }


    return(
        <table style={{margin: "auto"}}>
        <tbody>
          <tr><th>To-Do</th><th>Data</th><th>Wykonane?</th><th> </th></tr>
          {todos.map((x, ind) => {
            return <tr key={ind}><th>{x.text}</th><th>{x.date}</th><th><input type="checkbox" onChange={e => handleChange(e, ind)}></input></th><th><button id={ind} onClick={e => handleClick(e, ind)}>Usun</button></th></tr>
          })}
        </tbody>
        </table>
    )
}

export default Lista;