import types from './types'

const exercises = (state = [], action) => {
    switch(action.type) {
        case types.EXERCISE_SUCCESS:
            console.log(action.payload)
            if (state.length === 0) return [
            ...state,
            ...action.payload
            ]
            else return state;
        case types.REMOVE_EXERCISE:
            return state.filter(x => x._id !== action.payload)
        default:
            return state;
    }
}

const exerciseReducers = { exercises };

export default exerciseReducers;