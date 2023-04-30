import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo SportSee"
        width={178}
      ></img>
      <nav className="header__nav">
        <Link className="nav-link" to="/">
          Accueil
        </Link>
        <Link className="nav-link" to="#">
          Profil
        </Link>
        <Link className="nav-link" to="#">
          Réglage
        </Link>
        <Link className="nav-link" to="#">
          Communauté
        </Link>
      </nav>
    </div>
  );
}
