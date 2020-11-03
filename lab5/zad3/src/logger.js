const logger = state => next => action => {
    next(action);
    if (action.type === "START") {
        var inte = setInterval(state.dispatch, 1000, {type: "DECREMENT"})
        state.dispatch({type: "INT", int: inte})
    }
    if (action.type === "STOP") {
        console.log(state.getState())
        clearInterval(state.getState().int)
    }
}

export default logger