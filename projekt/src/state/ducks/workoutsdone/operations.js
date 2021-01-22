import {createAction} from 'redux-api-middleware';
import {WORKOUTDONE_FAILURE, WORKOUTDONE_REQUEST, WORKOUTDONE_SUCCESS,
 WORKOUTDONEPOST_REQUEST, WORKOUTDONEPOST_SUCCESS, WORKOUTDONEPOST_FAILURE} from "./types";

export const getWorkoutsDone = () => (dispatch) => dispatch(createAction({
  endpoint: 'http://localhost:5000/workoutsDone',
  method: 'GET',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUTDONE_REQUEST,
    WORKOUTDONE_SUCCESS,
    WORKOUTDONE_FAILURE]
}));

const postWorkoutDone = (workout) => (dispatch) => {
  dispatch(createAction({
  endpoint: 'http://localhost:5000/workoutsDone',
  method: 'POST',
  body: workout,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  types: [
    WORKOUTDONEPOST_REQUEST,
    WORKOUTDONEPOST_SUCCESS,
    WORKOUTDONEPOST_FAILURE]
}))};

const operations = {
  getWorkoutsDone,
  postWorkoutDone
}

export default operations