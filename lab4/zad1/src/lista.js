import Counter from './counter';

function List({state, add, inc, dec}) {
    return(
        <div>
            <button onClick={add}>Dodaj licznik</button>
            {state.map((x, inde) => {
                console.log("przesylam" + x)
                return(<Counter 
                value={x}
                onIncrement={inc(inde)}
                onDecrement={dec(inde)}></Counter>)
            })}
        </div>
    );
}

export default List;