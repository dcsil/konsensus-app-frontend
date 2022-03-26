import client from 'axios';
import { checkSession } from 'components/Auth/authFunctions';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';

const history = createBrowserHistory();

class App extends React.Component {
  componentDidMount() {
    // if (!window.location.href.includes('auth')) {
    //   checkSession(this);
    // }
  }

  state = { token: null };

  render() {
    const { id } = this.state;

    return (
      <Router history={history}>
        <Switch>
          {!id ? (
            <Route
              path={['/', '/auth']}
              render={(props) => <AuthLayout {...props} />}
            />
          ) : (
            <>
              <Route
                path={['/auth']}
                render={(props) => <AuthLayout {...props} />}
              />
              <Route
                path="/admin"
                render={(props) => <AdminLayout {...props} />}
              />
            </>
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
