import React from 'react';
import { shallow } from 'enzyme';
import FileTable from './File/FileTable';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test FileTable component', () => {
  const wrapper = shallow(<FileTable />);
  expect(wrapper).toMatchSnapshot();
});
