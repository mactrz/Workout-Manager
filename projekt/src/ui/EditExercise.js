import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import operations from '../state/ducks/exercises/operations';
import actions from '../state/ducks/exercises/actions';

const EditExercise = ( {editExerciseApi, exercises, editExercise} ) => {

    const {id} = useParams()
    const exercise = (exercises ? exercises.find(exercise => exercise._id === id): false)

    const validationSchema = yup.object().shape({
        title: yup
                .string(),
        description: yup
                .string()
                .matches(/exercise/, 'Description must contain the word exercise'),
        bodypart:yup
                .string(),
        difficulty: yup.number()
    })

    return(
        <Formik initialValues={{title: '', description: '', bodypart: '', difficulty: -1}} onSubmit={(values, {resetForm}) => {
            let valCorrect = {...values};
            if(values.title.length === 0) valCorrect.title = exercise.title;
            if(values.description.length === 0) valCorrect.description = exercise.description;
            if(values.bodypart.length === 0) valCorrect.bodypart = exercise.bodypart;
            if(values.difficulty === -1) valCorrect.difficulty = exercise.difficulty;
            const valsString = JSON.stringify(valCorrect);
            editExerciseApi(exercise.workout, exercise._id ,valsString);
            editExercise(exercise._id, valCorrect);
            resetForm({values:''});
        }} validationSchema={validationSchema}>
            {exercise && <Container><Form>
                <h6>Title:</h6>
                <Field name='title' type='text' placeholder={exercise.title}></Field>
                <ErrorMessage name="title" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Description:</h6>
                <Field name='description' as='textarea' placeholder={exercise.description} cols='30'></Field>
                <ErrorMessage name="description" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Body Part:</h6>
                <Field name='bodypart' as='select'>
                    <option value=''>{exercise.bodypart}</option>
                    <option value='legs'>Legs</option>
                    <option value='arms'>Arms</option>
                    <option value='chest'>Chest</option>
                    <option value='torso'>Torso</option>
                </Field>
                <ErrorMessage name="bodypart" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Difficulty:
                0<Field name='difficulty' type='range' min='0' max='10'/>10</h6>
                <ErrorMessage name="difficulty" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <Field className="btn btn-primary" type='submit' value='Edit'/>
            </Form></Container>}
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
        editExerciseApi: (idWorkout, idExercise, data) => {
            dispatch(operations.editExercise(idWorkout, idExercise, data));
        },
        editExercise: (id, data) => {
            dispatch(actions.editExercise(id, data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);