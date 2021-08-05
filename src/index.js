import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer'

import { BrowserRouter as Router } from "react-router-dom"

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);