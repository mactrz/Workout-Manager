const logger = store => next => action => {
    next(action);
    if (action.type === "INCREMENT") alert("Incermented")
    console.log(action);
}

export default logger;