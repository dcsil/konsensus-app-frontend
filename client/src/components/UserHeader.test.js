import React from 'react';
import { shallow } from 'enzyme';
import UserHeader from './Headers/UserHeader';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test User Header component', () => {
  const wrapper = shallow(<UserHeader />);
  expect(wrapper).toMatchSnapshot();
});
