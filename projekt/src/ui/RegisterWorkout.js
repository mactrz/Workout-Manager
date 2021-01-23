import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { connect } from 'react-redux';
import operations from '../state/ducks/workoutsdone/operations';

const RegisterWorkout = ( { workouts, registerApi } ) => {

    const validationSchema = yup.object().shape({
        difficulty: yup.string().required('Must give how difficult'),
        rating: yup.string().required('Must give a rating').min(0),
        time: yup.number().required('Please specify in minutes how much time the workout took').typeError("Input a number"),
        workout: yup.string().required('Must choose which workout')
    })

    return(
        <Formik initialValues={{difficulty: 0, rating: 0, time: 0, workout: ''}} onSubmit={(values, {resetForm}) => {
            const now = new Date();
            values.registerDate = now;
            console.log(values);
            const valsString = JSON.stringify(values);
            registerApi(valsString);
            resetForm({values: ''});
        }} validationSchema={validationSchema}>
            {workouts && <div>
            <Container>
            <Row>
            <Col>
                <h3>Describe your workout, later you can analyze all of this data!</h3>
            </Col>
            <Col><Form style={{marginTop: '10px'}}>
                <h6>Difficulty<br/>
                0 <Field name='difficulty' type='range' min='0' max='10'/> 10</h6>
            <ErrorMessage name='difficulty' className="error">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>

                <h6>How do you feel today?<br/>
                0 <Field name='rating' type='range' min='0' max='10'/> 10</h6>
            <ErrorMessage name='rating' className="error">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>

                <h6>Time<br/>
                <Field name='time' type='text'/></h6>
            <ErrorMessage name='time' className="error">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>

                <h6>Workout<br/>
                <Field name='workout' as='select'>
                    <option value=''>Select a workout</option>
                    {workouts.map(workout => (
                        <option key={workout._id} value={workout._id}>{workout.title}</option>
                    ))}
                </Field></h6>
            <ErrorMessage name='workout' className="error">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>
            <Field className="btn btn-secondary" type='submit' value='Register'></Field>
            </Form>
            </Col>
            </Row>
            </Container></div>}
        </Formik>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerApi: (data) => {
            dispatch(operations.postWorkoutDone(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWorkout);