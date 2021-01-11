import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import logger from 'redux-logger';

import { createMiddleware, apiMiddleware } from 'redux-api-middleware';
import workoutReducers from "./ducks/workouts/reducers";

const rootReducer = combineReducers(workoutReducers);
const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware, logger));

export default store;
