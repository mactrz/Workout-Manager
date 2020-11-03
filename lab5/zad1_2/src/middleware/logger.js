const logger = store => next => action => {
    next(action);
    if (action.type === "INCREMENT") alert("Incermented");
    let intervals = {};
    if (action.type === "COUNT") {
        var interval = setInterval(store.dispatch, 1000, {type: "DEC1", ind: action.ind, inter: interval});
        intervals[action.ind] = interval;
    }
    if (action.type === "STOP") {
        console.log(action.inter)
        clearInterval(action.inter)
    }
    console.log(action);
}

export default logger;