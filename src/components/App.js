import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';

export default class App extends Component {

  state = {

  };

  render() {
    
    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1><span className="fa fa-bolt fa-2x"></span>SpendLess</h1>
          </header>
          <main id="main" role="main">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route path="/dashboard" component={CategoryForm}/> */}
              {/* <Redirect to="/"/> */}
            </Switch>
          </main>
          <footer id="footer" role="contentinfo">
            <small>&copy; 2018 Grace Provost &amp; Christina Mills | Student Work</small>
          </footer>
        </div>
      </Router>
    );
  }
}