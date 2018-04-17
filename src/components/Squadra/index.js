import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const teamQuery = id => gql`
  {
    team(id: "${id}") {
      name
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

        return <p>{data.team.name}</p>;
      }}
    </Query>
  </div>
);

export default Squadra;
