import { Formik, Form, Field, FieldArray } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const AddWorkout = ( {addWorkout} ) => {
    return(
        <Formik initialValues={{title:'', days:[], description:'', exercises:[]}} onSubmit={(values, {resetForm}) => {
            addWorkout(values);
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
                                    <div className="row" key={ind}>
                                        <div className='col'>
                                            <Field name={`exercises.${ind}.title`} type='text'/>
                                        </div>
                                        <div className='col'>
                                            <Field name={`exercises.${ind}.description`} type='text'/>
                                        </div>
                                        <div className='col'>
                                            <Field name={`exercises.${ind}.bodypart`} as='select'>
                                                <option value=''>Choose a bodypart</option>
                                                <option value='legs'>Legs</option>
                                                <option value='arms'>Arms</option>
                                                <option value='chest'>Chest</option>
                                                <option value='torso'>Torso</option>
                                            </Field>
                                        </div>
                                        <div className='col'>
                                            <Field name={`exercises.${ind}.difficulty`} type='text'/>
                                        </div>
                                        <div className='col'>
                                            <button type="button" className="secondary"
                                            onClick={() => remove(ind)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <Button className="secondary"
                                onClick={() => push({text: ''})}>
                                    Add Exercise
                                </Button>
                            </div>
                        )}
                    </FieldArray>
                <Field type='submit' value='Add'></Field>
            </Form>)}
        </Formik>
    )
}

export default AddWorkout;