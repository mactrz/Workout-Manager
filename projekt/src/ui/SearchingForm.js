import { Form, Formik, Field } from 'formik';

const Search = ({ changeSearched, changeSelected }) => {
    return (
        <Formik initialValues={{searched: '', selected: ''}} onSubmit={(values, {resetForm}) => {
            changeSearched(values.searched);
            changeSelected(values.selected);
            resetForm({values:''});
        }}>
            <Form>
                <Field type='text' placeholder='Title...' name='searched'></Field>
                <Field as='select' name='selected'>
                    <option value=''>Choose a body part trained in the workout</option>
                    <option value='legs'>Legs</option>
                    <option value='chest'>Chest</option>
                    <option value='arms'>Arms</option>
                    <option value='torso'>Torso</option>
                </Field>
                <Field type='submit' value='Search'></Field>
            </Form>
        </Formik>
    )
}

export default Search;