import types from './types';

const removeWorkout = (id) => {
    return {type: types.REMOVE_WORKOUT, payload: id}
}

export const editWorkout = (ind, data) => {
    return {type: types.EDIT_WORKOUT, payload: {ind, data}}
}

const actions = {
    removeWorkout,
    editWorkout
}

export default actions;