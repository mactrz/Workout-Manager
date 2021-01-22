import types from './types'

const workoutsdone = (state = [], action) => {
    switch(action.type) {
        case types.WORKOUTDONE_SUCCESS:
            if (state.length === 0) return [
            ...state,
            ...action.payload
            ]
            else return state;
        case types.WORKOUTDONEPOST_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}

const workoutDoneReducers = { workoutsdone };

export default workoutDoneReducers;