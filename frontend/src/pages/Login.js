import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

      <button type='submit'>Login</button>
    </form>
  )
}

export default Login;