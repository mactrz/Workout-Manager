

function Counter({onIncrement, onDecrement, value}) {
    return (
        <div>
            <div>{value}</div><button onClick={onIncrement}>+</button><button onClick={onDecrement}>-</button>
        </div>
    );
}

export default Counter;