import types from './types'

const workouts = (state = [], action) => {
    switch(action.type) {
        case types.WORKOUT_SUCCESS:
            if (state.length === 0) return [
            ...state,
            ...action.payload
            ]
            else return state;
        case types.REMOVE_WORKOUT:
            return state.filter(x => x._id !== action.payload)
        case types.WORKOUTPOST_SUCCESS:
            return [...state, action.payload.workout];
        default:
            return state;
    }
}

const workoutReducers = { workouts };

export default workoutReducers;