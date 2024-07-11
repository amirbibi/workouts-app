import { useState } from 'react';

const Signup = () => {
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

      <button type='submit'>Signup</button>
    </form>
  )
}

export default Signup;