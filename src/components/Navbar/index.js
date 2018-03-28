import React from 'react';
import './styles.css';

import logo from './logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Home" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Calendario
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Squadre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Giocatori
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
