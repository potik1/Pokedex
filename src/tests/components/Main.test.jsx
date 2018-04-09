import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/Main';

describe('Main', () => {
  const main = shallow(<Main />);

  test('renders correctly', () => {
    expect(main).toMatchSnapshot();
  });
});
