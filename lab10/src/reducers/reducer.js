const reducer = (state=[], action) => {
    switch(action.type) {
        case('GET'):
            return action.payload;
        default:
            return state;
    }
}

export default reducer;