import React from 'react';
import { Link } from 'react-router-dom';

const TeamsList = ({ teams }) => (
  <div className="teams-list">
    {teams.map(team => (
      <Link
        key={team.id}
        to={`/teams/${team.id}`}
        className="list-group-item list-group-item-action"
      >
        <span>{team.name}</span>
      </Link>
    ))}
  </div>
);

export default TeamsList;
