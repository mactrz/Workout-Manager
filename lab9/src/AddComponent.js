import {Formik, Form, Field} from 'formik';

const AddIngredient = ({add}) => {
    return (
        <Formik initialValues={{ingredient: ''}} onSubmit={(data, {resetForm}) => {
            add(data.ingredient);
            resetForm({data: ''})
        }}>
            <Form>
                <h3>Add an ingredient</h3>
                <Field name='ingredient' type='text'></Field>
                <Field type='submit' value='Add'></Field>
            </Form>
        </Formik>

    )
}

export default AddIngredient;