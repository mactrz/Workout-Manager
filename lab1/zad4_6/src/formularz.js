import React from 'react';
import {Formik, Field, Form} from 'formik';


function Forma({changeSzukany}) {
    return(
        <div>
            <Formik initialValues={{szukany: ""}} onSubmit={(data, {resetForm}) => {
                changeSzukany(data);
                console.log(data)
                resetForm({data: ""});
            }}>
                <Form>
                    <Field name="szukany" type="text"/>
                    <Field type="submit" value="Wyszukaj"></Field>
                </Form>
            </Formik>
        </div>
    )
}

export default Forma;