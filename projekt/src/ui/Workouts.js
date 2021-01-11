import operations from '../state/ducks/workouts/operations';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Workouts = ({ fetchWorkouts, workouts }) => {

    useEffect(() => {
        fetchWorkouts()
    }, [fetchWorkouts])

    return(
        <div>
            {workouts.map(workout => {
                return(<div>{workout.title}</div>)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWorkouts: () => {
            console.log('work')
            dispatch(operations.getWorkouts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workouts)