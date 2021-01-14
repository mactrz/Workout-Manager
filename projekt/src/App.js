import './App.css';
import { connect } from 'react-redux';
import Workouts from './ui/Workouts';
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import Navbar from './ui/Navbar';
import { useEffect } from 'react';
import operations from './state/ducks/workouts/operations';
import operationsExercises from './state/ducks/exercises/operations';
import WorkoutDetails from './ui/WorkoutDetails';


function App({ fetchWorkouts, fetchExercises }) {

  useEffect(() => {
    fetchWorkouts()
    fetchExercises()
}, [fetchWorkouts, fetchExercises])

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Workouts}/>
          <Route exact path="/workouts/:id" component={WorkoutDetails}/>
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
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
