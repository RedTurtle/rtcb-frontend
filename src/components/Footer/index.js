import React from 'react';
import './index.css';
import logo from '../../assets/logo-white-png';

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col footer-title">
          <p>Calcio balilla {require('../../../package.json').version}</p>
        </div>
        <div className="col footer-logo">
          <img src={logo} alt="RedTurtle" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
