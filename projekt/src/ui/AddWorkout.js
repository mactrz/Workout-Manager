import { Formik, Form, Field, FieldArray } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const AddWorkout = ( {addWorkout} ) => {
    return(
        <Formik initialValues={{title:'', days:[], description:'', exercises:[]}} onSubmit={(values, {resetForm}) => {
            values['creationDate'] = new Date()
            const valsString = JSON.stringify(values);
            addWorkout(valsString);
            resetForm({values: ''});
        }}>
            {({ values }) => (<Form>
                <h3>Add a new workout</h3>
                <h6>Title:</h6>
                <Field name='title' type='text' placeholder='My Workout'></Field><br/>
                <h6>Description:</h6>
                <Field as='textarea' name='description' placeholder='This workout...' cols='30'></Field>
                <FieldArray name='exercises'>
                        {({ insert, remove, push }) => (
                            <div>
                                {values.exercises.length > 0 && values.exercises.map((x, ind) =>  (
                                    <div className="col" key={ind}>
                                        <div className='row'>
                                            <h6>Title:<br/>
                                            <Field name={`exercises.${ind}.title`} type='text' placeholder='My Exercise'/></h6>
                                        </div>
                                        <div className='row'>
                                            <h6>Description:<br/>
                                            <Field name={`exercises.${ind}.description`} as='textarea' placeholder='This exercise...' cols='30'/></h6>
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
                                            <h6>Difficulty:<br/>0
                                            <Field name={`exercises.${ind}.difficulty`} type='range' min='0' max='10'/>10</h6>
                                        </div>
                                        <div className='row'>
                                            <Button className="secondary"
                                            onClick={() => remove(ind)}>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                                <Button className="secondary"
                                onClick={() => push({title: '', description: '', bodypart: '', difficulty: ''})}>
                                    Add Exercise
                                </Button>
                            </div>
                        )}
                    </FieldArray>
                <Field className="btn btn-primary" type='submit' value='Add'></Field>
            </Form>)}
        </Formik>
    )
}

export default AddWorkout;