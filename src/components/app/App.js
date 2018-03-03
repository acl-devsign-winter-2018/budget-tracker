import React, { Component } from 'react';
import Categories from '../categories/Categories';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
        
        <header role="banner" id="header">
          <h1>Budget Tracker</h1>
          
          <Categories/>
        </header>

        <main role="main" id="main">
          <p>main content</p>
        </main>

        <footer role="contentInfo" id="footer">
          <p>(c) Budget Tracking </p>
        </footer>

      </div>
    );
  }
}