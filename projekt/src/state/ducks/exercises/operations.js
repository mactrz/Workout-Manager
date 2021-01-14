import {createAction} from 'redux-api-middleware';
import {EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESS,
 } from "./types";

 const getExercises = () => (dispatch) => dispatch(createAction({
  endpoint: 'http://localhost:5000/exercises/all',
  method: 'GET',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    EXERCISE_REQUEST,
    EXERCISE_SUCCESS,
    EXERCISE_FAILURE]
}));


const operationsExercises = {
  getExercises
}

export default operationsExercises