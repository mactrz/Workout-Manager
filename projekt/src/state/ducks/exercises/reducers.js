import types from './types'
import { WORKOUTPOST_SUCCESS } from '../workouts/types';


const exercises = (state = [], action) => {
    switch(action.type) {
        case types.EXERCISE_SUCCESS:
            if (state.length === 0) return [
            ...state,
            ...action.payload
            ]
            else return state;
        case types.REMOVE_EXERCISE:
            return state.filter(x => x._id !== action.payload)
        case types.EDIT_EXERCISE:
            let edited = [...state];
            const index = edited.findIndex(exercise => exercise._id === action.payload.id);
            edited[index] = {...edited[index], ...action.payload.data}
            return edited;
        case WORKOUTPOST_SUCCESS:
            console.log('i am from exercise');
            return [...state, ...action.payload.exercises];
        default:
            return state;
    }
}

const exerciseReducers = { exercises };

export default exerciseReducers;