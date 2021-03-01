import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Data = ( { workoutsdata, workouts } ) => {

    const [select, changeSelect] = useState('');

    let dateParsed = undefined
    if(workoutsdata) {
        dateParsed = workoutsdata.map(data => {
            return {...data, registerDate: new Date(data.registerDate).toDateString()}
        })
    }

    return (
        <Container fluid>
        <div style={{marginTop:'10px', width:'90%', height:'100%'}}>
            {workoutsdata && workouts && <div>
            <select className="btn btn-secondary" onChange={(value) => changeSelect(value.target.value)}>
                <option value=''>Choose a workout</option>
                {workouts.map(workout => (
                    <option key={workout._id} value={workout._id}>{workout.title}</option>
                ))}
            </select>
            {select && dateParsed && <ResponsiveContainer width={'99%'} height={300}>
            <LineChart data={dateParsed.filter(x => x.workout === select)} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="difficulty" stroke="#8884d8"/>
                <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
                <YAxis />
                <XAxis dataKey='registerDate'/>
                <Legend/>
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
            }
            {select && dateParsed && <ResponsiveContainer width={'99%'} height={300}>
            <LineChart data={dateParsed.filter(x => x.workout === select)} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="time" stroke="#8884d8"/>
                <YAxis />
                <XAxis dataKey='registerDate'/>
                <Legend/>
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
            }
            </div>}
        </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        workoutsdata: state.workoutsdone,
        workouts: state.workouts
    }
}

export default connect(mapStateToProps)(Data)