import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import App from './App';
const globalState = {
  token: null,
};
const globalStateContext = React.createContext(globalState);

Sentry.init({
  dsn: 'https://3bf38bec25594e9fa53355bb8a6dabb7@o358880.ingest.sentry.io/6253111',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <globalStateContext.Provider value={globalState}>
    <App />
  </globalStateContext.Provider>,
  document.getElementById('root')
);
