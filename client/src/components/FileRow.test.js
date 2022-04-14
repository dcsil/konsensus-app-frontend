import React from 'react';
import { shallow } from 'enzyme';
import FileRow from './File/FileRow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test FileRow component', () => {
  const wrapper = shallow(<FileRow />);
  expect(wrapper).toMatchSnapshot();
});
