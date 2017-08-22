import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Backgorund from './Background'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route component={Backgorund} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker()


