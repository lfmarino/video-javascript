import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';

import '../assets/styles/components/Login.scss';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <h2>Inicia sesión</h2>
        <form action='' className='login__container--form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='input'
            placeholder='Correo'
            name='email'
            onChange={handleInput}
          />
          <input
            type='password'
            className='input'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' name='remember-me' id='remember-me' value='remember-me' />
              Recuérdame
            </label>
            <a href='#'>Olvidé mi contraseña</a>
          </div>
        </form>
        <div className='login__container--social-media'>
          <div>
            <i className='fab fa-google' />
            Inicia sesión con google
          </div>
          <div>
            <i className='fab fa-twitter' />
            inicia sesión con twitter
          </div>
        </div>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          {' '}
          <Link to='/register'>Resgístrate</Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
