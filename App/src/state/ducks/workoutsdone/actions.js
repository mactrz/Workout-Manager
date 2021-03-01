import types from './types';

const addWorkout = (data) => {
    return {type: types.ADD_WORKOUTDONE, payload: data}
}

const actions = {
    addWorkout
}

export default actions;