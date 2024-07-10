import { useEffect } from 'react';

// Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const API_URL = 'http://localhost:4000/api/workouts/';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(API_URL);
      const responseJson = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: responseJson });
      }
    }

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />

    </div>
  );
}

export default Home;