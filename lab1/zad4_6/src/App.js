import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Forma from './formularz';

function App() {
  const [countries, changeCountries] = useState([]);
  const [szukany, changeSzukany] = useState({});
  const [sort, changeSort] = useState(1);
  const [wyswietlane, changeWyswietlane] = useState([]);
  const [border, changeBorder] = useState(false);
  const [waluty, changeWaluty] = useState([]);
  const [wybwal, changeWybwal] = useState("");
  const [koniec, changeKoniec] = useState([]);

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2').then(r => {
      changeCountries(r.data);
      changeWyswietlane(r.data);
      let wal = []
      r.data.map(x => {
        return x.currencies.forEach(y => {
          wal = [...wal, y.name]
        });
      })
      wal = Array(...[...new Set(wal)]);
      changeWaluty(wal);
    }).catch(er => console.log(er))
  },[])

  useEffect(() => {
    if(wybwal === "") {
      changeKoniec(wyswietlane);
    }
    else {
      const nowe = wyswietlane.filter(x => {
          return x.currencies.find(y => {
          return y.name === wybwal;
        }) !== undefined;
      })
      changeKoniec(nowe);
    }
  },[wybwal, wyswietlane])

  useEffect(() => {
    if(szukany.szukany !== undefined && szukany.szukany !== "") {
      const kraj = countries.find(x => x.alpha3Code === szukany.szukany);
      if(szukany.szukany.toUpperCase() === szukany.szukany && kraj !== undefined)
      {
        changeBorder(true);
        const sasiedzi = countries.reduce((acc, curr) => {
          if(kraj.borders.find(x => curr.alpha3Code === x) !== undefined) return [...acc, curr];
          else return acc;
        }, [])
        changeWyswietlane(sasiedzi);
      }
      else{
        changeBorder(false);
        const reg = new RegExp(szukany.szukany.toLowerCase()+'.*');
        changeWyswietlane(l => l.filter(x => {
          return reg.test(x.name.toLowerCase());
        }))
      }
    }
    else {
      changeBorder(false);
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
      <button onClick={handleClick}>Sortuj</button><br></br>
      <select name="waluty" id="curr" onChange={e => changeWybwal(e.target.value)}>
          <option value="">Wybierz walute</option>
          {waluty.map(x => {
            return (<option value={x} key={waluty.indexOf(x)}>{x}</option>);
          })}
      </select>
      {border && <div>PAŃSTWA SĄSIADUJĄCE</div>}
      <div id="kontener" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "auto", justifyItems: "center", width: 900, 
      rowGap: "5px", marginTop: "20px"}}>
        {koniec.map(x => {
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
