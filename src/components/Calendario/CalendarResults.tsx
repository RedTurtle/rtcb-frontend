import * as React from 'react';

interface IProps {
  name: string;
}

const CalendarResults: React.SFC<IProps> = ({ name }) => (
  <div className="tournament">
    <h2 className="tournament-name">{name}</h2>
  </div>
);

export default CalendarResults;
