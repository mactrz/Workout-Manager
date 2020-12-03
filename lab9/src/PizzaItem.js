const PizzaItem = ({ingredients, dough, name}) => {
    return (
        <div>
            <h5>Name: {name}</h5>
            <h5>Dough: {dough}</h5>
            <h5>Ingredients:</h5>
            {ingredients.map((x, ind) => {
                return(<p key={ind}>{x}</p>)
            })}
        </div>
    )
}

export default PizzaItem;