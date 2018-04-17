import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const playersQuery = gql`
  {
    players {
      edges {
        node {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

const Giocatori = () => (
  <div className="giocatori">
    <h1>Giocatori</h1>
    <Query query={playersQuery}>
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

        return data.players.edges.map(({ node }) => (
          <div key={node.id}>
            <p>
              {node.firstName} {node.lastName}
            </p>
          </div>
        ));
      }}
    </Query>
  </div>
);

export default Giocatori;
