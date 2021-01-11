import './App.css';
import { connect } from 'react-redux';
import Workouts from './ui/Workouts';





function App() {

  return (
    <Workouts/>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(App);
