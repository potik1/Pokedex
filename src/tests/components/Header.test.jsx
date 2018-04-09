import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  const header = shallow(< Header />);

  test('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
