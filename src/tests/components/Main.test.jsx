import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../../components/Main';

describe('components', () => {
  describe('<Main />', () => {
    test('renders correctly', () => {
      const tree = renderer.create(<Main />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
