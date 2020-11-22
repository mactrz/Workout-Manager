import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import {Link, useParams} from "react-router-dom";

const CountryEdit = ({state, onEdit}) => {
    const {id} = useParams();
    const country = state.find(x => x.id === Number(id));

    return (
        <div>
            <Formik initialValues={{name:'', population:'', surface:''}} onSubmit={(data, {resetForm}) => {
                onEdit(data, id);
                resetForm({data: ''});
            }}>
                <Form>
                    <h3>Name:</h3>
                    <Field name='name' type='text' placeholder={country.name}></Field><br/>
                    <h3>Population:</h3>
                    <Field name='population' type='text' placeholder={country.population}></Field><br/>
                    <h3>Surface:</h3>
                    <Field name='surface' type='text' placeholder={country.surface}></Field><br/>
                    <Field type='submit' value='Zatwierdź'></Field>
                </Form>
            </Formik>
            <Link to={'/countries/'+id}>Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        onEdit: (data, id) => {
            dispatch({type: 'EDIT', payload: data, id: id});
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(CountryEdit);