import {createAction} from 'redux-api-middleware';
import {EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESS,
  EXERCISEDELETE_FAILURE, EXERCISEDELETE_REQUEST, EXERCISEDELETE_SUCCESS} from "./types";

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

const removeExercise = (idworkout, idex) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:5000/workouts/${idworkout}/exercises/${idex}`,
  method: 'DELETE',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    EXERCISEDELETE_REQUEST,
    EXERCISEDELETE_SUCCESS,
    EXERCISEDELETE_FAILURE]
}));


const operationsExercises = {
  getExercises,
  removeExercise
}

export default operationsExercises