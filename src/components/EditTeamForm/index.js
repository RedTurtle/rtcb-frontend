import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

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

const createTeamMutation = gql`
  mutation addTeam($input: CreateTeamInput) {
    createTeam(input: CreateTeamInput) {
      ok
    }
  }
`;

class EditTeamForm extends Component {
  constructor(props) {
    super(props);

    // FIXME: Use these as const and remove the control
    let { name, defender, striker } = this.props.team;
    if (defender === null) {
      defender = {
        firstName: 'Mario',
        id: '000',
        lastName: 'Rossi',
      };
    }

    if (striker === null) {
      striker = {
        firstName: 'Mario',
        id: '001',
        lastName: 'Rossi',
      };
    }

    this.state = {
      defender: {
        label: `${defender.firstName} ${defender.lastName}`,
        value: defender.id,
      },
      name: name,
      striker: {
        label: `${striker.firstName} ${striker.lastName}`,
        value: striker.id,
      },
    };
  }

  handleChangeSelect = field => {
    return player => {
      const { label, value } = player;

      // tslint:disable-next-line
      console.log('select: ', field, player);
      // [field]: { id: player.value, name: player.label },
      this.setState({
        [field]: { value, label },
      });
    };
  };

  handleChangeInput = e => {
    let input = e.target.value;
    this.setState({ name: input });
  };

  render() {
    return (
      <Query query={playersQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return (
              <p>
                Error{' '}
                <span role="img" aria-label="FeelsMadMan">
                  😱
                </span>
              </p>
            );
          }

          const players = data.players.edges.map(el => ({
            label: `${el.node.firstName} ${el.node.lastName}`,
            value: el.node.id,
          }));

          return (
            <Mutation mutation={createTeamMutation}>
              {(addTeam, { mutLoading, mutError, mutData }) => {
                if (mutLoading) {
                  return <p>Loading...</p>;
                }
                if (mutError) {
                  return (
                    <p>
                      Error{' '}
                      <span role="img" aria-label="FeelsMadMan">
                        😱
                      </span>
                    </p>
                  );
                }
                if (mutData) {
                  // tslint:disable-next-line
                  console.log(data);
                }

                return (
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        addTeam({
                          variables: {
                            input: {
                              defender: this.state.defender.value,
                              name: this.state.name,
                              striker: this.state.striker.value,
                            },
                          },
                        });
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="team-name">Nome</label>
                        <input
                          className="form-control"
                          id="team-name"
                          name="team-name"
                          placeholder="Indica un nome"
                          value={this.state.name}
                          onChange={this.handleChangeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="team-defender">Difensore</label>
                        <Select
                          id="team-defender"
                          name="team-defender"
                          value={this.state.defender.value}
                          onChange={this.handleChangeSelect('defender')}
                          options={players}
                          clearable={false}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="team-striker">Attaccante</label>
                        <Select
                          id="team-striker"
                          name="team-striker"
                          value={this.state.striker.value}
                          onChange={this.handleChangeSelect('striker')}
                          options={players}
                          clearable={false}
                        />
                      </div>
                      <div className="form-submit">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.onSubmit}
                        >
                          Salva
                        </button>
                      </div>
                    </form>
                  </div>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default EditTeamForm;
