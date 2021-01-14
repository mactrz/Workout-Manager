import types from './types';

const removeWorkout = (id) => {
    return {type: types.REMOVE_WORKOUT, payload: id}
}


const actions = {
    removeWorkout
}

export default actions;