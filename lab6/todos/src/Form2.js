import React from 'react';
import {Formik, Field, Form} from 'formik';


function Forma2({dispatch}) {
    return(
        <div>
            <Formik initialValues={{text: "", status: ""}} onSubmit={(data, {resetForm}) => {
                dispatch({type: 'RESET'})
                dispatch({type: 'SEARCH', payload: data});
                resetForm({data: ""});
            }}>
                <Form>
                    <Field name="text" type="text"/>
                    <Field as="select" name="status">
                        <option value=''></option>
                        <option value="expired">EXPIRED</option>
                        <option value="done">DONE</option>
                        <option value="active">ACTIVE</option>
                    </Field>
                    <Field type="submit" value="Search"></Field>
                </Form>
            </Formik>
        </div>
    )
}

export default Forma2;