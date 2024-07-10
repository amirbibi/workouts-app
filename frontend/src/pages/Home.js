import { useState, useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';

const API_URL = 'http://localhost:4000/api/workouts/';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>

    </div>
  );
}

export default Home;