import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const playerQuery = id => gql`
  {
    player(id: "${id}") {
      firstName
      lastName
    }
  }
`;

const Giocatore = ({ match }) => (
  <Query query={playerQuery(match.params.id)}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error)
        return (
          <p>
            Error{' '}
            <span role="img" aria-label="FeelsBadMan">
              😭
            </span>
          </p>
        );

      return (
        <div className="giocatore container">
          <h1>
            {data.player.firstName} {data.player.lastName}
          </h1>
        </div>
      );
    }}
  </Query>
);

export default Giocatore;
