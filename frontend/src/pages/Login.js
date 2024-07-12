import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { login, error, isLoading } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>

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
        type='submit'
        disabled={isLoading}
      >
        Login
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login;