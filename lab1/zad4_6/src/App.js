import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Forma from './formularz';

function App() {
  const [countries, changeCountries] = useState([]);
  const [szukany, changeSzukany] = useState({});
  const [sort, changeSort] = useState(1);
  const [wyswietlane, changeWyswietlane] = useState([]);

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2').then(r => {
      console.log(r.data[0])
      changeCountries(r.data);
      changeWyswietlane(r.data);
    }).catch(er => console.log(er))
  },[])

  useEffect(() => {
    if(szukany.szukany !== undefined && szukany.szukany !== "") {
      console.log(szukany.szukany)
      const reg = new RegExp(szukany.szukany.toLowerCase()+'.*');
      console.log(reg.test("Afghanistan"))
      changeWyswietlane(l => l.filter(x => {
        return reg.test(x.name.toLowerCase());
      }))
    }
    else {
      changeWyswietlane(countries);
    }
  }, [szukany, countries])

  function handleClick() {
    if(sort === 1) {
      changeWyswietlane(l => l.slice().sort((a,b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;

        return 0;
      }))
    }
    else {
      changeWyswietlane(l => l.slice().sort((a,b) => {
        if (b.name > a.name) return 1;
        if (a.name > b.name) return -1;

        return 0;
      }))
    }
    changeSort(l => -l);
  }

  return (
    <div className="App" style={{margin: "auto"}}>
      <Forma changeSzukany={changeSzukany}></Forma>
      <button onClick={handleClick}>Sortuj</button>
      <div id="kontener" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "auto", justifyItems: "center", width: 900, 
      rowGap: "5px", marginTop: "20px"}}>
        {wyswietlane.map(x => {
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
