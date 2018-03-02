import React, { Component } from 'react';
import Categories from '../categories/Categories';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
        
        <header role="banner" id="header">
          <h1>C&J Budget Tracker</h1>
          
        </header>

        <main role="main" id="main">
          <Categories/>
          <p>main content</p>
        </main>

        <footer role="contentInfo" id="footer">
          <p>(c) C&J Budget Tracking </p>
        </footer>

      </div>
    );
  }
}