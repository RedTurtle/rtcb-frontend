import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

const teamQuery = id => gql`
  {
    team(id: "${id}") {
      name
      defender {
        id
        firstName
        lastName
      }
      striker {
        id
        firstName
        lastName
      }
    }
  }
`;

const Squadra = ({ match }) => (
  <div className="squadra">
    <Query query={teamQuery(match.params.id)}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error)
          return (
            <p>
              Error{' '}
              <span role="img" aria-label="FeelsMadMan">
                😱
              </span>
            </p>
          );

        return (
          <div className="team-wrapper">
            <h1>{data.team.name}</h1>
            <div className="team-members">
              {data.team.defender && (
                <div className="team-member">
                  <label>Defender</label>
                  <Link to={`/player/{data.team.defender.id}`}>
                    <span>{data.team.defender.firstName}</span>
                    <span>{data.team.defender.lastName}</span>
                  </Link>
                </div>
              )}
              {data.team.striker && (
                <div className="team-member">
                  <label>Striker</label>
                  <Link to={`/player/{data.team.striker.id}`}>
                    <span>{data.team.striker.firstName}</span>
                    <span>{data.team.striker.lastName}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Query>
  </div>
);

export default Squadra;
