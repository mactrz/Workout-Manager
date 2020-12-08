import { Formik, Field, Form } from 'formik';
 
export const Put = ({put}) => {
    return(
        <Formik initialValues={{userId:'', title:'', completed:false, id:''}} onSubmit={(data, {resetForm}) => {
            const {id, ...rest} = data;
            put({data: rest, id});
            resetForm({data:''});
        }}>
            <Form style={{border:'2px black solid', width:'50%', margin:'auto'}}>
                <label>User Id: <Field name='userId'/></label><br/>
                <label>Title: <Field name='title'/></label><br/>
                <label>ID: <Field name='id'/></label><br/>
                <label>Completed?<Field name='completed' type='checkbox'/></label><br/>
                <Field type='submit' value='PUT'></Field>
            </Form>
        </Formik>
    )
}