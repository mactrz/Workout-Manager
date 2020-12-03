const Ingredients = ({Ingredients}) => {
    return (
        <ul>
            <h3>Ingredients</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                {Ingredients.map((x,ind) => {
                    return(<div key={ind}>{x}</div>)
                })}
            </div>
        </ul>
    )
}

export default Ingredients;