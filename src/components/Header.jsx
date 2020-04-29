import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import profile from '../assets/static/icons8-nombre-64.png';
import { logoutRequest } from '../actions';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  if (hasUser) {
    console.log(user);
  }

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='logo header' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={profile} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ? (
              <li>
                <a href='/'>{user.name}</a>
              </li>
            ) :
              null
          }

          {
            hasUser ?
              (
                <li>
                  <a href='#logout' onClick={handleLogout}>Cerrar sesión</a>
                </li>
              ) : (
                <li>
                  <Link to='/login'>Iniciar sesión</Link>
                </li>
              )
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
