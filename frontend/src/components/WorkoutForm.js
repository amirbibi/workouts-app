import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const API_URL = 'http://localhost:4000/api/workouts/';

const WorkoutForm = () => {
  // TODO: Change to formData
  // const [formData, setFormData] = useState({ title: '', load: '', reps: '' });
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return setError('You must be logged in to add a workout');
    }

    const workout = { title, load, reps };

    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${user.token}`
      }
    })

    const responseJson = await response.json();

    if (!response.ok) {
      console.error(responseJson.error);
      setEmptyFields(responseJson.emptyFields);
      setError(responseJson.error);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setEmptyFields([]);

      setError(null);
      dispatch({ type: 'ADD_WORKOUT', payload: responseJson });
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields && emptyFields.includes('title') ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields && emptyFields.includes('load') ? "error" : ""} />

      <label>Reps:</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields && emptyFields.includes('reps') ? "error" : ""} />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}

export default WorkoutForm;