import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

it('app mounts properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
