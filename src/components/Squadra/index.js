import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import './styles.css';
import AddModal from '../AddModal';
import EditTeamForm from '../EditTeamForm';

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

        return (
          <div className="team-wrapper container">
            <div className="row">
              <div className="col-md-8">
                <h1>{data.team.name}</h1>
              </div>
              <div className="col-md-4">
                <AddModal
                  btnLabel="Modifica squadra"
                  form={
                    <EditTeamForm
                      teamName={data.team.name}
                      defender={data.team.defender}
                      striker={data.team.striker}
                    />
                  }
                />
              </div>
            </div>
            <div className="team-members">
              {data.team.defender && (
                <div className="team-member">
                  <label>Difensore</label>
                  <Link to={`/player/${data.team.defender.id}`}>
                    <span>{`${data.team.defender.firstName} ${
                      data.team.defender.lastName
                    }`}</span>
                  </Link>
                </div>
              )}
              <div className="team-member">
                <label>Difensore</label>
                <Link to={`/player/0`}>
                  <span>Difensore Imperturbabile</span>
                </Link>
              </div>
              {data.team.striker && (
                <div className="team-member">
                  <label>Attaccante</label>
                  <Link to={`/player/${data.team.striker.id}`}>
                    <span>{`${data.team.striker.firstName} ${
                      data.team.striker.lastName
                    }`}</span>
                  </Link>
                </div>
              )}
              <div className="team-member">
                <label>Attaccante</label>
                <Link to={`/player/1`}>
                  <span>Attaccante Furioso</span>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  </div>
);

export default Squadra;
