import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {


  render() {
    return (
      <header id="header">
        <h1><span className="fa fa-bolt fa-2x"></span>SpendLess</h1>
        <nav>
          <ul>
            <li><Link to="/">Placeholder</Link></li>
            <li><Link to="/">Placeholder</Link></li>
            <li><Link to="/">Placeholder</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
