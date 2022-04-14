import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './Auth/LoginForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test LoginForm component', () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper).toMatchSnapshot();
});
