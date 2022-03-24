import axios from 'axios';
import { checkSession } from 'components/Auth/authFunctions';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';

axios.defaults.withCredentials = true;

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const history = createBrowserHistory();

class App extends React.Component {
  // componentDidMount() {
  // checkSession(this);
  // }

  state = { id: null, role: null };

  render() {
    const { id } = this.state;

    return (
      <BrowserRouter basename={getBasename()} history={history}>
        <Switch>
          {!id ? (
            <Route
              path="/auth"
              render={(props) => <AuthLayout {...props} />}
            />
          ) : (
            <Route
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
