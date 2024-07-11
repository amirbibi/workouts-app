import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { signup, error, isLoading } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  }

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Email: </label>
      <input
        type='email'
        name='email'
        onChange={handleChange}
      />

      <label>Password: </label>
      <input
        type='password'
        name='password'
        onChange={handleChange}
      />

      <button
        disabled={isLoading}
        type='submit'
      >
        Signup
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Signup;