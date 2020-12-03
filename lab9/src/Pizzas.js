import PizzaItem from './PizzaItem';

const Pizzas = ({pizzas, delPizza}) => {
    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', justifyItems:'center'}}>
            {pizzas.map((x, ind) => {
                return(<div key={ind}><PizzaItem ingredients={x.ingredients} dough={x.dough} name={x.name}/><button onClick={() => delPizza(ind)}>Remove</button></div>)
            })}
        </div>
    )
}

export default Pizzas

