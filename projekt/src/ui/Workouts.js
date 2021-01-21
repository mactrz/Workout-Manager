import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import actions from '../state/ducks/workouts/actions';
import { useState } from 'react';
import Search from './SearchingForm';
import AddWorkout from './AddWorkout';
import operations from '../state/ducks/workouts/operations';

const Workouts = ({ workouts, removeWorkout, exercises, addWorkout, removeWorkoutApi }) => {

    const [searched, changeSearched] = useState('');
    const [selected, changeSelected] = useState('');
    const [sortTitle, changeSortTitle] = useState(0);
    const [sortDate, changeSortDate] = useState(0);
    const [open, setOpen] = useState(false);
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

    const workoutsSorted = finalWorkouts.sort((a, b) => {
        if (sortTitle === 1) {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
        }
        if (sortTitle === 2) {
            if (a.title > b.title) return -1
            if (a.title < b.title) return 1
            return 0
        }
        if (sortDate === 1) {
            if (new Date(a.creationDate) < new Date(b.creationDate)) return -1
            if (new Date(a.creationDate) > new Date(b.creationDate)) return 1
            return 0
        }
        if (sortDate === 2) {
            if (new Date(a.creationDate) > new Date(b.creationDate)) return -1
            if (new Date(a.creationDate) < new Date(b.creationDate)) return 1
            return 0
        }
        return 0
    })


    const handleClickDetails = (id) => {
        history.push(`/workouts/${id}`);
    }

    const handleSortTitle = () => {
        changeSortDate(0);
        changeSortTitle(prev => {
            if(sortTitle === 2) return 0;
            else return prev + 1;
        })
    }

    const handleSortDate = () => {
        changeSortTitle(0);
        changeSortDate(prev => {
            if(sortDate === 2) return 0;
            else return prev + 1;
        })
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
            <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={handleSortTitle} style={{width:"40%", textAlign:'center'}}>Title
                        {sortTitle === 0 && <i style={{marginLeft:'10px'}} className="fas fa-sort"></i>}
                        {sortTitle === 1 && <i style={{marginLeft:'10px'}} className="fas fa-sort-down"></i>}
                        {sortTitle === 2 && <i style={{marginLeft:'10px'}} className="fas fa-sort-up"></i>}
                        </th>
                        <th onClick={handleSortDate} style={{width:"40%", textAlign:'center'}}>Creation Date
                        {sortDate === 0 && <i style={{marginLeft:'10px'}} className="fas fa-sort"></i>}
                        {sortDate === 1 && <i style={{marginLeft:'10px'}} className="fas fa-sort-down"></i>}
                        {sortDate === 2 && <i style={{marginLeft:'10px'}} className="fas fa-sort-up"></i>}</th>
                        <th style={{width:"10%", textAlign:'center'}}>Remove</th>
                        <th style={{width:"10%",textAlign:'center'}}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutsSorted.map(x => {
                        return(
                            <tr key={x._id}>
                                <th onClick={() => handleClickDetails(x._id)}>{x.title}</th>
                                <th onClick={() => handleClickDetails(x._id)}>{new Date(x.creationDate).toDateString()}</th>
                                <th onClick={() => {removeWorkout(x._id); removeWorkoutApi(x._id)}} style={{textAlign:'center', verticalAlign:'middle'}}>
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
            </Row>
            <Row><Button
                onClick={() => setOpen(!open)}
            >
                Add new workout
             </Button></Row>
            <Row>
            {open && <div style={{marginLeft: 'auto', marginRight: 'auto'}}><AddWorkout addWorkout={addWorkout}/></div>}
            </Row>
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
            dispatch(actions.removeWorkout(id))
        },
        addWorkout: (workout) => {
            dispatch(operations.postWorkout(workout))
        },
        removeWorkoutApi: (id) => {
            dispatch(operations.removeWorkout(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Workouts)