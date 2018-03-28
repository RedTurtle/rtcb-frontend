import React from 'react';
import './index.css';

const Squadra = ({ id, teamName, winner }) => (
  <div className={`squadra${winner ? ' winner' : ''}`}>
    <a href={`/teams/${id}`} title="Team page">
      <span className="team">{teamName}</span>
    </a>
  </div>
);

export default Squadra;
