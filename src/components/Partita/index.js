import React from 'react';
import SquadraLink from '../SquadraLink';
import './index.css';

const Partita = () => {
  let randomInt = parseInt(Math.random() * 10);
  let teamAWinner = randomInt > 5;
  let teamBWinner = !teamAWinner;

  return (
    <div className="partita">
      <div className="row">
        <div className="col partita-team">
          <SquadraLink id="team-ploro" teamName="teamA" winner={teamAWinner} />
        </div>
        <div className="col partita-punti">
          <span>{teamAWinner ? '10' : randomInt.toString()}</span>
        </div>
      </div>
      <div className="row">
        <div className="col partita-team">
          <SquadraLink id="team-culo" teamName="teamB" winner={teamBWinner} />
        </div>
        <div className="col partita-punti">
          <span>{teamBWinner ? '10' : randomInt.toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Partita;
