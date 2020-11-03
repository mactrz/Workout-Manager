import Counter from './counter';

function List({state, add, inc, dec, amount}) {
    return(
        <div>
            <button onClick={add}>Dodaj licznik</button>
            {state.map((x, inde) => {
                return(<Counter
                onAmount={(am) => amount(inde, am)}
                key={inde}
                value={x}
                onIncrement={() => inc(inde)}
                onDecrement={() => dec(inde)}></Counter>)
            })}
        </div>
    );
}

export default List;