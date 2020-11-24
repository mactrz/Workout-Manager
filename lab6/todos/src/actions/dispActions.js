const add = (payload) => {
    return {type: 'ADD', payload: payload}
}

const change = (index) => {
    return {type: 'CHANGE', index}
}

const remove = (payload) => {
    return {type: 'REMOVER', index: payload}
}

const reset = () => {
    return {type: 'RESET'}
}

const search = (text, status) => {
    return {type: 'SEARCH', text, status}
}

const time = () => {
    return {type: 'TIME'}
}

export default {remove, search, time, reset, add, change}
