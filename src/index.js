import React from 'react';
import ReactDOM from 'react-dom';
import App from "App"
import * as serviceWorker from './serviceWorker';

// Base react element that renders everything.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
