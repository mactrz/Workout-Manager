import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import operationsExercises from '../state/ducks/exercises/operations';
import actions from '../state/ducks/exercises/actions';
import operations from '../state/ducks/workouts/operations';
import { editWorkout } from '../state/ducks/workouts/actions';


const EditWorkout = ( { editWorkoutApi, workouts, exercises, removeExercise, removeExerciseApi, editWorkout } ) => {
    
    const history = useHistory();
    const {id} = useParams()
    const workout = (workouts ? workouts.find(workout => workout._id === id): false)
    const correctExercises = (workouts ? exercises.filter(exercise => exercise.workout === id): [])

    const handleClickEditExercise = (id) => {
        history.push(`/edit/exercises/${id}`);
    }

    const validationSchema = yup.object().shape({
        title: yup.string()
        .test('Capital letter', 'Title must begin with a capital letter',
        (title) => (title !== undefined ? title[0] === title[0].toUpperCase(): true)),
        exercises: yup.array().of(
            yup.object().shape({
                title: yup
                .string()
                .required('Title is required'),
                description: yup
                .string()
                .required('Description is required')
                .matches(/exercise/, 'Description must contain the word exercise'),
                bodypart:yup.string().required('Must chose one'),
                difficulty: yup.number()
            })
        ),
        description: yup.string().max(200, 'Description too long'),
    })

    return(
        <Formik initialValues={{title:'', description:'', exercises:[]}} onSubmit={(values, {resetForm}) => {
            let valSend = {...values}
            if(values.title.length === 0) valSend['title'] = workout.title;
            if(values.description.length === 0) valSend['description'] = workout.description;
            editWorkout(workout._id ,valSend);
            const valsString = JSON.stringify(valSend);
            editWorkoutApi(workout._id, valsString);
            resetForm({values: ''});
        }} validationSchema={validationSchema}>
            {({ values, resetForm }) => (
            <div>
            {workout && <Container>
            <Row>
            <Col>
            <Form>
                <h3>Edit Workout</h3>
                <h6>Title:</h6>
                <Field name='title' type='text' placeholder={workout.title}></Field><br/>
                <ErrorMessage name="title" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Description:</h6>
                <Field as='textarea' name='description' placeholder={workout.description} cols='30'></Field><br/>
                <ErrorMessage name="description" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <div>
                <h4>Exercises:</h4>
                <FieldArray name='exercises'>
                        {({ remove, push }) => (
                            <div style={{borderTop:'2px solid black', marginTop:'3px', paddingTop:'3px'}}>
                                {values.exercises.length > 0 && values.exercises.map((x, ind) =>  (
                                    <div className="col" key={ind} style={{borderBottom:'2px solid black', marginBottom:'3px', paddingBottom:'3px'}}>
                                        <div className='row'>
                                            <h6>Title:<br/>
                                            <Field name={`exercises.${ind}.title`} type='text' placeholder='My Exercise'/>
                                            </h6>
                                        </div>
                                        <div className='row'>
                                            <ErrorMessage name={`exercises.${ind}.title`} className="error">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                            </ErrorMessage>
                                        </div>
                                        <div className='row'>
                                            <h6>Description:<br/>
                                            <Field name={`exercises.${ind}.description`} as='textarea' placeholder='This exercise...' cols='30'/></h6>
                                        </div>
                                        <div className='row'>
                                            <ErrorMessage name={`exercises.${ind}.description`} className="error">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                            </ErrorMessage>
                                        </div>
                                        <div className='row'>
                                            <h6>Body Part:<br/>
                                            <Field name={`exercises.${ind}.bodypart`} as='select'>
                                                <option value=''>Choose a bodypart</option>
                                                <option value='legs'>Legs</option>
                                                <option value='arms'>Arms</option>
                                                <option value='chest'>Chest</option>
                                                <option value='torso'>Torso</option>
                                            </Field></h6>
                                        </div>
                                        <div className='row'>
                                            <ErrorMessage name={`exercises.${ind}.bodypart`} className="error">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                            </ErrorMessage>
                                        </div>
                                        <div className='row'>
                                            <h6>Difficulty:<br/>0
                                            <Field name={`exercises.${ind}.difficulty`} type='range' min='0' max='10'/>10</h6>
                                        </div>
                                        <div className='row'>
                                            <ErrorMessage name={`exercises.${ind}.difficulty`} className="error">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                            </ErrorMessage>
                                        </div>
                                        <div className='row'>
                                            <Button className="btn btn-danger"
                                            onClick={() => remove(ind)}>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                                <Button className="btn btn-secondary"
                                onClick={() => push({title: '', description: '', bodypart: '', difficulty: '', workout: workout._id})}>
                                    Add Exercise
                                </Button>
                            </div>
                        )}
                    </FieldArray><br/>
                    </div>
                <Field className="btn btn-success" type='submit' value='Edit'></Field>
                <Button style={{marginLeft:'21px'}} className="btn btn-secondary" type='reset' onClick={resetForm}>Reset Form</Button>
            </Form>
            </Col>
            <Col>
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
            </Col>
            </Row>
            </Container>}
            </div>)}
        </Formik>
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
        },
        editWorkoutApi: (id, data) => {
            dispatch(operations.editWorkout(id, data))
        },
        editWorkout: (ind, data) => {
            dispatch(editWorkout(ind, data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);