import React from 'react';
import { shallow } from 'enzyme';
import Header from './Headers/Header';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('should test Header component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
