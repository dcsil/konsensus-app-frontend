import React from 'react';
import { shallow } from 'enzyme';
import FileCard from './File/FileCard';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test FileCard component', () => {
  const wrapper = shallow(<FileCard />);
  expect(wrapper).toMatchSnapshot();
});
