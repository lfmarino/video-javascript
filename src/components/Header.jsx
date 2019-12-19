import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import profile from '../assets/static/icons8-nombre-64.png'

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logo header" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={profile} alt="" />
            <p>Perfil</p>
        </div>
        <ul>
          <li><a href="">Cuenta</a></li>
          <li><a href="">Cerrar sesion</a></li>
        </ul>
      </div>
  </header>
);

export default Header
