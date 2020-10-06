import React from 'react';
import { Formik } from "formik";

function Forma({changePrzeslany}) {
    return(
        <div>
            <Formik initialValues={{text: '', date: ''}} onSubmit={(values, {resetForm}) => {
                changePrzeslany(values);
                resetForm({values: ''});
            }
            }
            validate={(val) => {
                const aktualnaData = new Date();
                let errors = {};
                if(!val.text) {
                    errors.text = "Nie moze byc puste";
                }
                else if(Date.parse(val.date) <= aktualnaData) {
                    errors.date = "Data musi byc pozniejsza niz dzien dzisiejszy"
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
                            Data
                        <input
                            name="date"
                            type="date"
                            value={values.date}
                            onChange={handleChange}
                        />
                        {errors.date && touched.date && <div>{errors.date}</div>}
                        </label><br/>
                        <button type="submit">Zatwierdź</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Forma;