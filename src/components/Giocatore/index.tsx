import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

import AddModal from '../AddModal';
import EditProfileForm from '../EditProfileForm';

import './styles.css';

const playerQuery = (id: string) => gql`
  {
    player(id: "${id}") {
      firstName
      lastName
      dateJoined
      role
      versatile
    }
  }
`;

export const roles = {
  D: 'Difensore',
  S: 'Attaccante',
};

const Giocatore: React.SFC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => (
  <Query query={playerQuery(match.params.id)}>
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
        <div className="giocatore container">
          <h1 className="title">
            {data.player.firstName} {data.player.lastName}
          </h1>
          <AddModal btnLabel="giocatore" form={<EditProfileForm />} />
          <div className="row">
            <div className="col-md">
              <img
                src="https://picsum.photos/300/500/?random"
                className="img-fluid"
                alt="Profilo del giocatore"
              />
            </div>
            <div className="col-md infos">
              <p>
                <strong>Ruolo</strong>
                <span>
                  {roles.hasOwnProperty(data.player.role) &&
                    roles[data.player.role]}&nbsp;
                  <span className="badge badge-secondary">
                    {data.player.versatile ? 'Versatile' : 'Fisso'}
                  </span>
                </span>
              </p>
              <p>
                <strong>Data di iscrizione</strong>
                <span>
                  {new Date(data.player.dateJoined).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Giocatore;
