import React from 'react';
import { shallow } from 'enzyme';
import UploadModal from './Modals/UploadModal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Test UploadModal component', () => {
  const wrapper = shallow(<UploadModal />);
  expect(wrapper).toMatchSnapshot();
});
