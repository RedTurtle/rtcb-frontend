import React from 'react';
import Squadra from '../Squadra';

const Classifica = () => (
  <div className="classifica">
    <div className="section-list">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Punti</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10).keys()].map(el => (
              <tr key={el}>
                <td scope="row">
                  <span>{`${el + 1}°`}</span>
                </td>
                <td>
                  <Squadra id="team-ploro" teamName="teamA" />
                </td>
                <td>
                  <span>{2 * (10 - el) + 1}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Classifica;
