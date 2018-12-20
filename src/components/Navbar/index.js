import React from 'react';
import './styles.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import logo from './logo.png';

const Navbar = ({ location }) => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Home" />
    </Link>
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
        <li
          className={`nav-item ${
            location.pathname.match(/^\/teams/) ? 'active' : ''
          }`}
        >
          <Link className="nav-link" to="/teams">
            Squadre
          </Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname.match(/^\/players/) ? 'active' : ''
          }`}
        >
          <Link className="nav-link" to="/players">
            Giocatori
          </Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname.match(/^\/quickmatches/) ? 'active' : ''
          }`}
        >
          <Link className="nav-link" to="/quickmatches">
            Partite Rapide
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Navbar);
