import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [countries, changeCountries] = useState([]);

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2').then(r => {
      console.log(r.data[0])
      changeCountries(r.data);
    }).catch(er => console.log(er))
  },[])


  return (
    <div className="App" style={{margin: "auto"}}>
      <div id="kontener" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "auto", justifyItems: "center", width: 900, 
      rowGap: "5px"}}>
        {countries.map(x => {
          return (<div key={countries.indexOf(x)} style= {{backgroundImage: "url(" + x.flag + ")",
        backgroundSize: "200px", width: "200px", height: "170px", backgroundRepeat: "no-repeat",
         position: "relative", border: "4px black solid"}}><div style={{position: "absolute", 
        bottom: 10}}>{x.name}</div></div>);
        })}
      </div>
    </div>
  );
}

export default App;
