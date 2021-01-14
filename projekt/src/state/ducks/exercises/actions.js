import types from './types';

const removeExercise = (id) => {
    return {type: types.REMOVE_EXERCISE, payload: id}
}


const actions = {
    removeExercise
}

export default actions;