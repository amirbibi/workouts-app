import { useState } from 'react';

const API_URL = 'http://localhost:4000/api/workouts/';

const WorkoutForm = () => {
  // TODO: Change to formData
  // const [formData, setFormData] = useState({ title: '', load: '', reps: '' });

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const responseJson = await response.json();

    if (!response.ok) {
      console.error(responseJson.error);
      setError(responseJson.error);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');

      setError(null);
      console.log("New workout added", responseJson)
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title} />

      <label>Load (in kg):</label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load} />

      <label>Reps:</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps} />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}

export default WorkoutForm;