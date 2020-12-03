import { Formik, Form, Field } from 'formik'

const CreatePizza = ({ingredients, addPizza}) => {
    return(
        <Formik initialValues={{ingredients: [], dough: 'Thin', name:''}} onSubmit={(value, {resetForm}) => {
            addPizza(value);
            resetForm({value:''})
        }}>
            <Form>
                <label>
                    Pick ingredients:
                    <br/>
                    <br/>
                {ingredients.map((x, index) => {
                    return(<label key={index}>{x}<Field value={x} name='ingredients' type='checkbox'/></label>)
                })}
                </label>
                <br/>
                <label>
                    <br/>
                    Pick dough type:  
                    <br/>
                <Field as='select' name='dough'>
                    <option value='Thin'>Thin</option>
                    <option value='American'>American</option>
                </Field><br/><br/>
                </label>
                <label>
                    Name the pizza:
                    <br/>
                    <Field name='name'></Field>
                </label><br/><br/>
                <Field type='submit' value='Add pizza'></Field>
            </Form>
        </Formik>
    )
}

export default CreatePizza;