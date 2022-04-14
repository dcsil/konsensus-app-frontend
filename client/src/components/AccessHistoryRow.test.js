import React from 'react';
import { shallow } from 'enzyme';
import AccessHistoryRow from './File/AccessHistoryRow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test AccessHistoryRow component', () => {
  const wrapper = shallow(<AccessHistoryRow />);
  expect(wrapper).toMatchSnapshot();
});
