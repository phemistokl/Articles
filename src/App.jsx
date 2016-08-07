import React from 'react';
import { Link } from 'react-router';

import './App.scss'

const App = React.createClass({
      render: function() {
        return (
          <div className="app">
            <div className="menu-bar">
              <div className="menu-item">
                <Link to='/about'>About</Link>
              </div>

              <div className="menu-item">
                <Link to='/inbox'>Inbox</Link>
              </div>
            </div>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        );
      }
});

export default App;
