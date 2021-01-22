import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Data = ( { workoutsdata } ) => {

    return (
        <div>
            {workoutsdata && <div>
            {workoutsdata.map(data => {
                return(<div>{data.difficulty}</div>)
            })}
            </div>}
            <LineChart data={workoutsdata} width={400} height={400}>
                <Line type="monotone" dataKey="difficulty" stroke="#8884d8"/>
                <XAxis dataKey="title" />
                <YAxis />
            </LineChart>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workoutsdata: state.workoutsdone
    }
}

export default connect(mapStateToProps)(Data)