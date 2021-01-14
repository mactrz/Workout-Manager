import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Table, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import actions from '../state/ducks/workouts/actions';
import { useState } from 'react';
import Search from './SearchingForm';

const Workouts = ({ workouts, removeWorkout, exercises }) => {

    const [searched, changeSearched] = useState('');
    const [selected, changeSelected] = useState('');
    const history = useHistory();

    const workoutsSearched = workouts.filter(workout => {
        if(searched !== '') {
            const reg = new RegExp("^"+searched.toLowerCase()+".*");
            return reg.test(workout.title.toLowerCase());
        }
        else return true;
    });
    
    const finalWorkouts = workoutsSearched.filter(workout => {
        if(selected !== '') {
            const chosenWorkoutsIds = exercises.filter(exercise => exercise.bodypart === selected).map(exercise => exercise.workout);
            const reply = chosenWorkoutsIds.findIndex(id => id === workout._id)
            return (reply === -1 ? false: true);
        }
        else return true;
    })


    const handleClickDetails = (id) => {
        history.push(`/workouts/${id}`);
    }


    return(
        <Container style={{marginTop:'40px'}}>
            <Row>
                <Col>
                <h1>Workouts</h1>
                </Col>
                <Col>
                    <Search changeSearched={changeSearched} changeSelected={changeSelected}/>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width:"80%", textAlign:'center'}}>Title</th>
                        <th style={{width:"10%", textAlign:'center'}}>Remove</th>
                        <th style={{width:"10%",textAlign:'center'}}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {finalWorkouts.map(x => {
                        return(
                            <tr key={x._id}>
                                <th onClick={() => handleClickDetails(x._id)}>{x.title}</th>
                                <th onClick={() => removeWorkout(x._id)} style={{textAlign:'center', verticalAlign:'middle'}}>
                                    <i className="fas fa-trash"></i>
                                </th>
                                <th style={{textAlign:'center', verticalAlign:'middle'}}>
                                    <i className="fas fa-edit"></i>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
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
        removeWorkout: (id) => {
            console.log(actions.removeWorkout(id))
            dispatch(actions.removeWorkout(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Workouts)