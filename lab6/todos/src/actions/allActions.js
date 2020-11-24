const adda = (payload) => {
    return {type: 'ADDA', payload: payload}
}

const changea = (index) => {
    return {type: 'CHANGEA', index}
}

const removea = (payload) => {
    return {type: 'REMOVERA', index: payload}
}

const timea = () => {
    return {type: 'TIMEA'}
}

export default {adda, changea, removea, timea}