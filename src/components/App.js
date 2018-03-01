import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import './app.css';
// import Categories from './category/Categories';


export default class App extends Component {

  state = {

  };

  render() {
    
    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1>SpendLess</h1>
          </header>
          <main id="main">
            <Switch>
              {/* <Route exact path="/" component={Categories}/> */}

            </Switch>

          </main>
          <footer id="footer">
          </footer>
        </div>
      </Router>
    );
  }
}