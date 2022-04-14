import React from 'react';
import { shallow } from 'enzyme';
import AdminNavbar from './Navbars/AdminNavbar';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test AdminNavbar component', () => {
  const wrapper = shallow(<AdminNavbar />);
  expect(wrapper).toMatchSnapshot();
});
