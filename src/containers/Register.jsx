import React, { useState } from 'react';

import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleInput}
          />
          <input
            className='input'
            type='text'
            placeholder='Correo'
            name='email'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/ingreso'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
