import React, { Component } from 'react';
import Categories from './budget/Categories';
import './App.css';

export default class App extends Component {

  render() {

    return (
      <div className="app">
        
        <header role="banner" id="header">
          <h1>Budget Tracker</h1>
          
        </header>

        <main role="main" id="main">
          <Categories/>
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Budget Tracker App</p>
        </footer>

      </div>
    );
  }
}