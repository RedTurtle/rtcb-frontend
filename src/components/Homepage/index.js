import React from 'react';
import GiornataInCorso from '../GiornataInCorso';
import './index.css';

const Homepage = () => (
  <div id="homepage-content" className="container">
    <div className="row">
      <div className="col">
        <div className="homepage-section">
          <h2>Giornata in corso</h2>
          <GiornataInCorso />
        </div>
      </div>
      <div className="col">
        <div className="homepage-section">
          <h2>Inserimento risultati</h2>
          <GiornataInCorso />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="homepage-section">
          <h2>Giornata precedente</h2>
          <GiornataInCorso />
        </div>
      </div>
      <div className="col">
        <div className="homepage-section">
          <h2>Classifica</h2>
          <GiornataInCorso />
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
