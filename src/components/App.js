import React, { Component } from 'react';
import Categories from './budget/Categories';
import './App.css';

export default class App extends Component {

  render() {

    return (
      <div className="app">
        
        <header role="banner" id="header">
          <section className="head-container maxwidth-wrap">
            <h1 className="logo">Budget Tracker</h1>
            <nav>
              <ul>
                <li><a href="#">Dashboard</a></li>
              </ul>
            </nav>
          </section>
          
        </header>

        <main role="main" id="main">
          <section className="main-container maxwidth-wrap">
            <Categories/>
          </section>
        </main>

        <footer role="contentinfo" id="footer">
          <section className="footer maxwidth-wrap"> 
            <p>(c) <a href="https://github.com/limongoo/budget-tracker/tree/dev" target="_blank" rel="author noopener noreferrer">Budget Tracker App</a></p>
            <p>Created by: <a href="https://github.com/pereztjacob" target="_blank" rel="author noopener noreferrer">Jacob</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack</a> | <a href="https://github.com/limongoo" target="_blank" rel="author noopener noreferrer">Ivan</a></p>
          </section>
        </footer>

      </div>
    );
  }
}