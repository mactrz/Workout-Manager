import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const EditExercise = ( {editExercise, exercises} ) => {

    const {id} = useParams()
    const exercise = (exercises ? exercises.find(exercise => exercise._id === id): false)

    const validationSchema = yup.object().shape({
        title: yup
                .string()
                .required('Title is required'),
        description: yup
                .string()
                .required('Description is required')
                .matches(/exercise/, 'Description must contain the word exercise'),
        bodypart:yup
                .string()
                .required('Must chose one'),
        difficulty: yup.number()
    })

    return(
        <Formik initialValues={{title: '', description: '', bodypart: '', difficulty: 0}} onSubmit={(values, {resetForm}) => {
            editExercise(values);
            resetForm({values:''});
        }} validationSchema={validationSchema}>
            {exercise && <Container><Form>
                <h6>Title:</h6>
                <Field name='title' type='text' placeholder={exercise.title}></Field>
                <ErrorMessage name="title" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Description:</h6>
                <Field name='description' as='textarea' placeholder='This exercise...' cols='30'></Field>
                <ErrorMessage name="description" className="error">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>
                <h6>Body Part:</h6>
                <Field name='bodypart' as='select'>
                    <option value=''>Choose a bodypart</option>
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
        editExercise: (id, data) => {
            dispatch()
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);