import * as React from 'react';
import renderer from 'react-test-renderer';
import EditProfileForm from './index';

it('should match previous snapshot', () => {
  const component = renderer.create(
    <EditProfileForm
      player={{
        firstName: 'Ciccio',
        lastName: 'Pasticcio',
        role: 'D',
        versatile: false,
      }}
    />,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
