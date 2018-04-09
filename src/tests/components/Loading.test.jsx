import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

describe('Loading', () => {
  const loading = shallow(<Loading />);

  test('renders correctly', () => {
    expect(loading).toMatchSnapshot();
  });
});

