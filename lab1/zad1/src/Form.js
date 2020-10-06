import React from 'react';
import { Formik } from "formik";

function Forma({changePrzeslany}) {
    return(
        <div>
            <Formik initialValues={{text: '', date: ''}} onSubmit={(data) => changePrzeslany(data)}>
                {({values, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <label>
                            ToDo
                        <input
                            name="text"
                            type="text"
                            onChange={handleChange}
                        />
                        </label><br/>
                        <label>
                            Data
                        <input
                            name="date"
                            type="date"
                            onChange={handleChange}
                        />
                        </label><br/>
                        <button type="submit">Zatwierdź</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Forma;