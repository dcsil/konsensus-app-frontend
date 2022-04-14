import React from 'react';
import { shallow } from 'enzyme';
import ShareModal from './Modals/ShareModal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test Sidebar component', () => {
  const wrapper = shallow(<ShareModal />);
  expect(wrapper).toMatchSnapshot();
});
