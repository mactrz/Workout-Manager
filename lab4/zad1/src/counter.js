

function Counter({onIncrement, onDecrement, onAmount, value}) {
    return (
        <div>
            <div>{value.value}</div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button><br/>
            <div>O ile?</div>
            <input onChange={(e) => onAmount(e.target.value)}></input>
        </div>
    );
}

export default Counter;