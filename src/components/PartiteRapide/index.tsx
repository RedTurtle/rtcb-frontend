import * as React from 'react';
import AggiungiRapida from '../AggiungiRapida';

class PartiteRapide extends React.Component {
  public state = {};
  public render() {
    return (
      <div className="partite-rapide container">
        <h1>Partite Rapide</h1>
        <div className="row">
          <div className="col-md">Lista partite</div>
          <div className="col-md">
            <AggiungiRapida />
          </div>
        </div>
      </div>
    );
  }
}

export default PartiteRapide;
