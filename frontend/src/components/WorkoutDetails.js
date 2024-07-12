import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const API_URL = 'http://localhost:4000/api/workouts/';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(`${API_URL}${workout._id}`, {
      method: 'DELETE'
    });

    const responseJson = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: responseJson })
    }
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleDelete} className="material-symbols-outlined">
        delete
      </span>
    </div>
  )
}

export default WorkoutDetails