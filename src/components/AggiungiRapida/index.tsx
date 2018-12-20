import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const teamsQuery = gql`
  {
    teams {
      edges {
        node {
          id
          name
          defender {
            username
            firstName
            lastName
          }
          striker {
            username
            firstName
            lastName
          }
        }
      }
    }
  }
`;

class AggiungiRapida extends React.Component {
  public state = {
    blueTeam: '',
    redTeam: '',
  };

  public teamNameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;
    this.setState({
      [id]: value,
    });
  };

  public render() {
    return (
      <Query query={teamsQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return (
              <p>
                Error{' '}
                <span role="img" aria-label="FeelsBadMan">
                  😭
                </span>
              </p>
            );
          }

          return (
            <div className="aggiungi-rapida">
              <form>
                <div className="form-group">
                  <label htmlFor="blueTeam">Squadra Blu</label>
                  <input
                    id="blueTeam"
                    name="blueTeam"
                    type="text"
                    value={this.state.blueTeam}
                    onChange={this.teamNameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="redTeam">Squadra Rossa</label>
                  <input
                    id="redTeam"
                    name="redTeam"
                    type="text"
                    value={this.state.redTeam}
                    onChange={this.teamNameChange}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default AggiungiRapida;
