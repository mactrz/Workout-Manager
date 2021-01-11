import { connect } from 'react-redux';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Workouts = ({ workouts }) => {

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(x => {
                        return(
                            <tr key={x._id}>
                                <th>{x.title}</th>
                                <th>
                                    <i className="fas fa-trash"></i>
                                </th>
                                <th>
                                    <i className="fas fa-edit"></i>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

// {workouts.map(workout => {
//     return(<div key={workout._id}>{workout.title}</div>)
// })}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
    }
}


export default connect(mapStateToProps)(Workouts)