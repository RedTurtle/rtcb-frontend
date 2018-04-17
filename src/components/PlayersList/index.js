import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const PlayersList = ({ players, url }) => (
  <div className="playerslist">
    <div className="list-group">
      {players.map(player => (
        <Link
          key={player.id}
          className="list-group-item list-group-item-action"
          to={`${url}/${player.id}`}
        >
          {player.firstName} {player.lastName}
        </Link>
      ))}
    </div>
  </div>
);

export default PlayersList;
