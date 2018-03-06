import React, { Component } from 'react';
import Categories from './categories/Categories';
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="main-body">
        <header id="main-header">
          <h1>Budget Tracker</h1>
        </header>
        <main id="main-content">
          <Categories/>
        </main>
        <footer id="main-footer">

        </footer>
      </div>
    );
  }
}