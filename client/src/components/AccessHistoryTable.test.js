import React from 'react';
import { shallow } from 'enzyme';
import AccessHistoryTable from './File/AccessHistoryTable';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test Sidebar component', () => {
  const wrapper = shallow(<AccessHistoryTable />);
  expect(wrapper).toMatchSnapshot();
});
