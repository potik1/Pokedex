import React from 'react';
import { shallow } from 'enzyme';
import Showing from '../../src/components/Showing';

describe('Showing', () => {
  const showing = shallow(<Showing />);

  test('renders correctly', () => {
    expect(showing).toMatchSnapshot();
  });
});
