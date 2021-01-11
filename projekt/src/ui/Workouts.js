import operations from '../state/ducks/workouts/operations';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Workouts = ({ fetchWorkouts, workouts, check }) => {

    useEffect(() => {
        fetchWorkouts()
        check()
    }, [fetchWorkouts, check])

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
            dispatch(operations.getWorkouts())
        },
        check: () => {
            dispatch({type: '@@workout/WORKOUT_REQUEST', payload: 'kek'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workouts)