import { Formik, Field, Form, FieldArray } from 'formik';


const Forma = ({add}) => {
    return(
        <Formik initialValues={{Title:"", Content:"", PublicationDate:"", Category:"", Comments:[]}} onSubmit={(data, {resetForm}) => {
            add(data);
            resetForm({data: ""})
        }} validate={(values) => {
            const errors = {}
            const now = new Date()
            const date = new Date(values.PublicationDate)

            if(!values.Content) {
                errors.Content = 'Must not be empty';
            }

            if(values.Title.length < 4) errors.Title = 'Title too short';
            else if(values.Title.length > 20) errors.Title = 'Title too long';

            if(now > date) errors.PublicationDate = 'Must be later then today'

            return errors;
        }}>

            {({ errors, touched, values }) => (<Form>
                <label>Title<br/><Field name='Title' type='text'></Field></label><br/>
                {errors.Title && touched.Title ? (
                    <div>{errors.Title}</div>
                ) : null}
                <label>Content<br/><Field name='Content' type='text'></Field></label><br/>
                {errors.Content && touched.Content ? (
                <div>{errors.Content}</div>
                ) : null}
                <label>PublicationDate<br/><Field name='PublicationDate' type='date'></Field></label><br/>
                {errors.PublicationDate && touched.PublicationDate ? (
                <div>{errors.PublicationDate}</div>
                ) : null}
                <label>Category<br/><Field name='Category' as='select'>
                        <option value='Sport'>Sport</option>
                        <option value='News'>News</option>
                        <option value='Economy'>Economy</option>
                        <option value='Politics'>Politics</option>
                    </Field></label><br/>
                <label>Comments:
                    <FieldArray name='Comments'>
                        {({ insert, remove, push }) => (
                            <div>
                                {values.Comments.length > 0 && values.Comments.map((x, ind) =>  (
                                    <div className="row" key={ind}>
                                        <div className='col'>
                                            <Field name={`Comments.${ind}.text`} type='text'/>
                                        </div>
                                        <div className='col'>
                                            <button type="button" className="secondary"
                                            onClick={() => remove(ind)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="secondary"
                                onClick={() => push({text: ''})}>
                                    Add Comment
                                </button>
                            </div>
                        )}
                    </FieldArray>
                </label>
                <Field type='submit' value='Submit'></Field>
            </Form>)}

        </Formik>
    )
}

export default Forma;