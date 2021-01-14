import {createAction} from 'redux-api-middleware';
import {WORKOUT_FAILURE, WORKOUT_REQUEST, WORKOUT_SUCCESS,
 } from "./types";

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


const operations = {
  getWorkouts
}

export default operations