import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Cookies from 'js-cookie';
import Web3 from 'web3';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import GlobalState, { reducer } from 'components/GlobalState';
import { useReducer } from 'react';

const history = createBrowserHistory();
const initialState = {
  token: null,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [account, setAccount] = useState(); // state variable to set account.

  useEffect(() => {
    if (!window.location.href.includes('auth')) {
      if (!Cookies.get('access')) {
        window.location.href = '/auth/login';
      }
    }
    async function load() {
      const web3 = new Web3(
        Web3.givenProvider || 'http://localhost:7545'
      );
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0]);
      console.log('Your account is: ', accounts[0]);
    }
    load();
  }, []);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
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
    </GlobalState>
  );
};

export default App;
