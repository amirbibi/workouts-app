import { useEffect } from 'react';

// Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const API_URL = 'http://localhost:4000/api/workouts/';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(API_URL, {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      });
      const responseJson = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: responseJson });
      }
    }

    if (user) {
      fetchWorkouts();
    }

  }, [dispatch, user]);

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