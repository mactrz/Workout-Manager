import types from './types';

const removeExercise = (id) => {
    return {type: types.REMOVE_EXERCISE, payload: id}
}

const editExercise = (id, data) => {
    return {type: types.EDIT_EXERCISE, payload: { id, data }}
}

const actions = {
    removeExercise,
    editExercise
}

export default actions;