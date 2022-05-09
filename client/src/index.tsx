import { DAppProvider } from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
        <DAppProvider config={{}}>

    <App />
    </DAppProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
