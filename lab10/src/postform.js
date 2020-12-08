import { Formik, Field, Form } from 'formik';
 
export const Post = ({post}) => {
    return(
        <Formik initialValues={{userId:'', title:'', completed:false}} onSubmit={(data, {resetForm}) => {
            post(data);
            resetForm({data:''});
        }}>
            <Form style={{border:'2px black solid', width:'50%', margin:'auto'}}>
                <label>User Id: <Field name='userId'/></label><br/>
                <label>Title: <Field name='title'/></label><br/>
                <label>Completed?<Field name='completed' type='checkbox'/></label><br/>
                <Field type='submit' value='POST'></Field>
            </Form>
        </Formik>
    )
}