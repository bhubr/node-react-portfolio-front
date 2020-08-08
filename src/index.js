import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';

import App from './App';

Modal.setAppElement('#root');

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement,
);
