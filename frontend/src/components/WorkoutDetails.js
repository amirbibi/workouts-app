import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

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
      <p>{workout.createdAt}</p>
      <p>{workout.updatedAt}</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default WorkoutDetails