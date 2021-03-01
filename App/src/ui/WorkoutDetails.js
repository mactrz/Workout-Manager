import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import actions from '../state/ducks/exercises/actions';
import operationsExercises from '../state/ducks/exercises/operations';
import { useHistory } from 'react-router-dom';


const WorkoutDetails = ( { workouts, exercises, removeExercise, removeExerciseApi } ) => {

    const history = useHistory();
    const {id} = useParams()
    const workout = (workouts ? workouts.find(workout => workout._id === id): false)
    const correctExercises = (workouts ? exercises.filter(exercise => exercise.workout === id): [])

    const handleClickEditExercise = (id) => {
        history.push(`/edit/exercises/${id}`);
    }

    return(
        <div>
        {workout && <Container style={{marginTop: '40px'}}>
            <h1>{workout.title}</h1>
            <h5>Description: {workout.description}</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width:"80%", textAlign:'center'}}>Exercises</th>
                        <th style={{width:"10%", textAlign:'center'}}>Remove</th>
                        <th style={{width:"10%",textAlign:'center'}}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {correctExercises.map(x => {
                        return(
                            <tr key={x._id}>
                                <th>
                                    <h3>{x.title}</h3>
                                    {x.description}<br/><br/>
                                    Improves: {x.bodypart}<br/>
                                    Difficulty: {x.difficulty}/10
                                </th>
                                <th onClick={() => {removeExercise(x._id); removeExerciseApi(workout._id, x._id)}} style={{textAlign:'center', verticalAlign:'middle'}}>
                                    <i className="fas fa-trash"></i>
                                </th>
                                <th onClick={() => handleClickEditExercise(x._id)} style={{textAlign:'center', verticalAlign:'middle'}}>
                                    <i className="fas fa-edit"></i>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
        exercises: state.exercises
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeExercise: (id) => {
            dispatch(actions.removeExercise(id))
        },
        removeExerciseApi: (workid, exid) => {
            dispatch(operationsExercises.removeExercise(workid, exid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetails);