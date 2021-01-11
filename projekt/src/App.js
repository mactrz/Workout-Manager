import './App.css';
import { connect } from 'react-redux';
import Workouts from './ui/Workouts';
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import Navbar from './ui/Navbar';
import { useEffect } from 'react';
import operations from './state/ducks/workouts/operations';


function App({ fetchWorkouts }) {

  useEffect(() => {
    fetchWorkouts()
}, [fetchWorkouts])

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Workouts}/>
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
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
