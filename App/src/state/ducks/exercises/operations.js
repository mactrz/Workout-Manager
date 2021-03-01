import {createAction} from 'redux-api-middleware';
import {EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESS,
  EXERCISEDELETE_FAILURE, EXERCISEDELETE_REQUEST, EXERCISEDELETE_SUCCESS,
  EXERCISEEDIT_FAILURE, EXERCISEEDIT_REQUEST, EXERCISEEDIT_SUCCESS} from "./types";

 const getExercises = () => (dispatch) => dispatch(createAction({
  endpoint: 'http://10.45.3.2:5000/exercises/all',
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
  endpoint: `http://10.45.3.2:5000/workouts/${idworkout}/exercises/${idex}`,
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


const editExercise = (idworkout, idExercise, data) => (dispatch) => dispatch(createAction({
  endpoint: `http://10.45.3.2:5000/workouts/${idworkout}/exercises/${idExercise}`,
  method: 'PUT',
  body: data,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    EXERCISEEDIT_REQUEST,
    EXERCISEEDIT_SUCCESS,
    EXERCISEEDIT_FAILURE]
}));

const operationsExercises = {
  getExercises,
  removeExercise,
  editExercise
}

export default operationsExercises