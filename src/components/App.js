import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
import Dashboard from './category/Dashboard';
import Header from './header/Header';

export default class App extends Component {

  state = {

  };

  render() {
    
    return (

      <Router>
        <div id="container">
          <Header/>
          <main id="main" role="main">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Redirect to="/"/>
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