import React from 'react';
import GiornataInCorso from '../GiornataInCorso';
import Classifica from '../Classifica';
import './index.css';

const Homepage = () => (
  <div id="homepage-content" className="container">
    <div className="homepage-section">
      <h2>Giornata in corso</h2>
      <GiornataInCorso />
    </div>
    <div className="homepage-section">
      <h2>Inserimento risultati</h2>
      <GiornataInCorso />
    </div>
    <div className="homepage-section">
      <h2>Giornata precedente</h2>
      <GiornataInCorso />
    </div>
    <div className="homepage-section">
      <h2>Classifica</h2>
      <Classifica />
    </div>
  </div>
);

export default Homepage;
