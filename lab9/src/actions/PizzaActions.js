const DelPizza = (ind) => {
    return {type: 'DELETEPIZZA', payload: ind}
}

const AddPizza = (pizza) => {
    return {type: 'ADDPIZZA', payload: pizza}
}

const exp = {DelPizza, AddPizza}

export default exp;