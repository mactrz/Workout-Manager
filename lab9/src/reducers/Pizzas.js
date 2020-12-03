const Pizzas = (state = [], action) => {
    switch(action.type) {
        case('DELETEPIZZA'):
            return state.filter((x, inde) => inde !== action.payload);
        case('ADDPIZZA'):
            return [...state, action.payload];
        default:
            return state
    }
}

export default Pizzas