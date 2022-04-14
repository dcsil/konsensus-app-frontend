import React from 'react';
import { shallow } from 'enzyme';
import OrgTable from './Profile/OrgTable';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test OrgTable component', () => {
  const wrapper = shallow(<OrgTable />);
  expect(wrapper).toMatchSnapshot();
});
