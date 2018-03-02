import React, { Component } from 'react';
import Categories from '../categories/Categories';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="app"> 
          <header role="banner" id="header">
            <h1>C&J Budget Tracker</h1>
          </header>

          <main role="main" id="main">
            <Switch>
              <Route exact path="/" component={Categories}/>
              {/* <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/> */}
              <Redirect to="/"/>
              <p>main content</p>
            </Switch>
          </main>
      
          <footer role="contentInfo" id="footer">
            <p>(c) C&J Budget Tracking </p>
          </footer>
        </div>
      </Router>
    );
  }
}