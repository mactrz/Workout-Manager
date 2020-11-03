

function Counter({onIncrement, onDecrement, onAmount, value, onStart, onStop}) {
    return (
        <div>
            <button onClick={onStart}>START</button>
            <button onClick={onStop}>STOP</button>
            <div>{value.value}</div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button><br/>
            <div>O ile?</div>
            <input onChange={(e) => onAmount(e.target.value)}></input>
        </div>
    );
}

export default Counter;