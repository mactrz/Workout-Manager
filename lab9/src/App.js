import './App.css';
import AddIngredient from './AddComponent';
import Ingredients from './Ingredients';
import { connect } from 'react-redux';
import IngredientsActions from './actions/IngredientsActions'
import PizzaActions from './actions/PizzaActions';
import Pizzas from './Pizzas';
import CreatePizza from './CreatePizza';
import { useState } from 'react'


function App({ing, onAddIng, pizz, onDelPizza, onAddPizza}) {
  const [show, changeShow] = useState(false);

  console.log(pizz)
  return (
    <div className="App">
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom: '3px solid black'}}>
        <AddIngredient add={onAddIng}/>
        <Ingredients Ingredients={ing}/>
      </div>
      {pizz.length !== 0 && <div style={{borderBottom: '3px solid black', paddingBottom: '5px'}}>
        <Pizzas pizzas={pizz} delPizza={onDelPizza}></Pizzas>
      </div>}
      <button onClick={() => changeShow(val => !val)}>Create Pizza</button>
      {show && <div style={{width:'50%', margin:'auto', paddingBottom:'20px'}}><CreatePizza ingredients={ing} addPizza={onAddPizza}/></div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ing: state.Ingredients,
    pizz: state.Pizzas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIng: (ingredient) => {
      dispatch(IngredientsActions.ActionAddIngredient(ingredient))
    },
    onDelPizza: (ind) => {
      dispatch(PizzaActions.DelPizza(ind))
    },
    onAddPizza: (pizza) => {
      dispatch(PizzaActions.AddPizza(pizza))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
