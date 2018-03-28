import React from 'react';
import Squadra from '../Squadra';
import './index.css';

const Partita = () => (
  <div className="partita">
    <div className="row">
      <div className="col partita-team">
        <Squadra
          id="team-ploro"
          teamName="teamA"
          winner={Math.random() * 10 > 5}
        />
      </div>
      <div className="col partita-punti">
        <span>{parseInt(Math.random() * 10)}</span>
      </div>
    </div>
    <div className="row">
      <div className="col partita-team">
        <Squadra
          id="team-culo"
          teamName="teamB"
          winner={Math.random() * 10 > 5}
        />
      </div>
      <div className="col partita-punti">
        <span>{parseInt(Math.random() * 10)}</span>
      </div>
    </div>
  </div>
);

export default Partita;
