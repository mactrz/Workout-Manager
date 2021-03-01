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
        case types.EDIT_WORKOUT:
            let newOne = [...state];
            const index = newOne.findIndex(x => x._id === action.payload.ind)
            const ex = [...newOne[index].exercises, ...action.payload.data.exercises]
            newOne[index] = {...newOne[index], ...action.payload.data}
            newOne[index].exercises = ex;
            return newOne;
        default:
            return state;
    }
}

const workoutReducers = { workouts };

export default workoutReducers;