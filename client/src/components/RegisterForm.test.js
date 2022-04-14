import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from './Auth/RegisterForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test Sidebar component', () => {
  const wrapper = shallow(<RegisterForm />);
  expect(wrapper).toMatchSnapshot();
});
