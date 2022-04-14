import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Profile/Avatar';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test Sidebar component', () => {
  const wrapper = shallow(<Avatar />);
  expect(wrapper).toMatchSnapshot();
});
