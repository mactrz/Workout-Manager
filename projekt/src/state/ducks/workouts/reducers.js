import types from './types'

const workouts = (state = [], action) => {
    switch(action.type) {
        case types.WORKOUT_SUCCESS:
            return [
            ...state,
            ...action.payload
            ]
        default:
            return state;
    }
}

const workoutReducers = { workouts };

export default workoutReducers;