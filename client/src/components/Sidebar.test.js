import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar/Sidebar';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test Sidebar component', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper).toMatchSnapshot();
});
