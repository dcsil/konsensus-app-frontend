import React from 'react';
import { shallow } from 'enzyme';
import ImageViewer from './File/ImageViewer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test ImageViewer component', () => {
  const wrapper = shallow(<ImageViewer />);
  expect(wrapper).toMatchSnapshot();
});
