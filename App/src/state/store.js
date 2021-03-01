import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import logger from 'redux-logger';

import { apiMiddleware } from 'redux-api-middleware';
import workoutReducers from "./ducks/workouts/reducers";
import exerciseReducers from './ducks/exercises/reducers';
import workoutDoneReducers from './ducks/workoutsdone/reducers';

const rootReducer = combineReducers({...workoutReducers, ...exerciseReducers, ...workoutDoneReducers});
const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware, logger));

export default store;
