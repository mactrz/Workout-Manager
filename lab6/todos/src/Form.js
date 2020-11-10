import React from 'react';
import { Formik } from "formik";

function Forma({dispatch}) {
    return(
        <div>
            <Formik initialValues={{text: '', date: '', done: false, expired: false}} onSubmit={(values, {resetForm}) => {
                dispatch({type: 'ADD', payload: values});
                resetForm({values: ''});
            }
            }
            validate={(val) => {
                const aktualnaData = new Date();
                let errors = {};
                if(!val.text) {
                }
                else if(Date.parse(val.date) <= aktualnaData) {
                    errors.date = "Date must be later then today"
                }
                else if(!val.date) {
                    errors.date = "Date is required"
                }
                return errors
            }}>
                {({values, handleChange, handleSubmit, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <label>
                            ToDo
                        <input
                            name="text"
                            type="text"
                            value={values.text}
                            onChange={handleChange}
                        />
                        {errors.text && touched.text && <div>{errors.text}</div>}
                        </label><br/>
                        <label>
                            Date
                        <input
                            name="date"
                            type="datetime-local"
                            value={values.date}
                            onChange={handleChange}
                        />
                        {errors.date && touched.date && <div>{errors.date}</div>}
                        </label><br/>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Forma;