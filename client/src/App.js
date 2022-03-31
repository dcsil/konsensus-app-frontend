import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Cookies from 'js-cookie';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';

const history = createBrowserHistory();

const App = () => {
  useEffect(() => {
    if (!window.location.href.includes('auth')) {
      if (!Cookies.get('access')) {
        window.location.href = '/auth/login';
      }
    }
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route
          path={['/auth']}
          render={(props) => <AuthLayout {...props} />}
        />
        <Route
          path="/admin"
          render={(props) => <AdminLayout {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
