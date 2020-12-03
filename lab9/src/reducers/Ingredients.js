const Ingredients = (state = [], action) => {
    switch(action.type) {
        case('ADDINGREDIENT'):
            return [...state, action.payload];
        default:
            return state;
    }
}

export default Ingredients;