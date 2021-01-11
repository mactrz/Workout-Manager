import types from './types'

const workouts = (state = [], action) => {
    switch(action.type) {
        case types.WORKOUTS_SUCCESS:
            console.log('kek')
            return [
            ...state,
            ...action.payload
            ]
        case types.WORKOUT_REQUEST:
            console.log(state)
            return state
        default:
            return state;
    }
}

const workoutReducers = { workouts };

export default workoutReducers;