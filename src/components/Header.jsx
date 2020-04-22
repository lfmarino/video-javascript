import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import profile from '../assets/static/icons8-nombre-64.png';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

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
          <li>
            <a href=''>Cuenta</a>
          </li>
          <li>
            <Link to='/ingreso'>Cerrar sesión</Link>
          </li>
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

export default connect(mapStateToProps, null)(Header);
