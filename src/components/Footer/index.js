import React from 'react';
import './index.css';

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col footer-title">
          <p>Calcio balilla {require('../../../package.json').version}</p>
        </div>
        <div className="col footer-logo">
          <img src="../../assets/logo-white.png" alt="RedTurtle" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
