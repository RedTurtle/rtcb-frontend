import { Query } from 'react-apollo';

export interface IData {
  tournaments: {
    edges: Array<{
      node: {
        id: string;
        name: string;
      };
    }>;
  };
  tournament?: {
    name: string;
  };
}

export class TournamentsQuery extends Query<IData, {}> {}
