import './App.css';
import { connect } from 'react-redux';
import Workouts from './ui/Workouts';
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import Navbar from './ui/Navbar';
import { useEffect } from 'react';
import operations from './state/ducks/workouts/operations';
import operationsExercises from './state/ducks/exercises/operations';
import WorkoutDetails from './ui/WorkoutDetails';
import EditWorkout from './ui/EditWorkout';
import EditExercise from './ui/EditExercise';
import RegisterWorkout from './ui/RegisterWorkout';
import { getWorkoutsDone } from './state/ducks/workoutsdone/operations';
import Data from './ui/Data';


function App({ fetchWorkouts, fetchExercises, fetchWorkoutsDone }) {

  useEffect(() => {
    fetchWorkouts();
    fetchExercises();
    fetchWorkoutsDone();
}, [fetchWorkouts, fetchExercises, fetchWorkoutsDone])

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Workouts}/>
          <Route exact path="/workout" component={RegisterWorkout}/>
          <Route exact path="/data" component={Data}/>
          <Route exact path="/workouts/:id" component={WorkoutDetails}/>
          <Route exact path='/edit/workouts/:id' component={EditWorkout}/>
          <Route exact path='/edit/exercises/:id' component={EditExercise}/>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchWorkouts: () => {
          dispatch(operations.getWorkouts())
      },
      fetchExercises: () => {
        dispatch(operationsExercises.getExercises())
      },
      fetchWorkoutsDone: () => {
        dispatch(getWorkoutsDone())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
