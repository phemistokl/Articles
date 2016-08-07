import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
          <Route path='/about' component={AboutPage} />
          <Route path='/inbox' component={InboxPage} />
      </Route>
    </Router>,
    document.getElementById('mount-point')
);
