import {createAction} from 'redux-api-middleware';
import {WORKOUT_FAILURE, WORKOUT_REQUEST, WORKOUT_SUCCESS,
 WORKOUTPOST_REQUEST, WORKOUTPOST_SUCCESS, WORKOUTPOST_FAILURE,
WORKOUTDELETE_FAILURE, WORKOUTDELETE_REQUEST, WORKOUTDELETE_SUCCESS,
WORKOUTEDIT_FAILURE, WORKOUTEDIT_REQUEST, WORKOUTEDIT_SUCCESS} from "./types";

const getWorkouts = () => (dispatch) => dispatch(createAction({
  endpoint: 'http://localhost:5000/workouts',
  method: 'GET',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUT_REQUEST,
    WORKOUT_SUCCESS,
    WORKOUT_FAILURE]
}));

const postWorkout = (workout) => (dispatch) => {
  dispatch(createAction({
  endpoint: 'http://localhost:5000/workouts/withExercises',
  method: 'POST',
  body: workout,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUTPOST_REQUEST,
    WORKOUTPOST_SUCCESS,
    WORKOUTPOST_FAILURE]
}))};

const removeWorkout = (id) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:5000/workouts/${id}`,
  method: 'DELETE',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUTDELETE_REQUEST,
    WORKOUTDELETE_SUCCESS,
    WORKOUTDELETE_FAILURE]
}));

const editWorkout = (id, change) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:5000/workouts/${id}`,
  method: 'PUT',
  body: change,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUTEDIT_REQUEST,
    WORKOUTEDIT_SUCCESS,
    WORKOUTEDIT_FAILURE]
}));

const operations = {
  getWorkouts,
  postWorkout,
  removeWorkout,
  editWorkout
}

export default operations