import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './budget.logo.png';

export default class Header extends Component {
  render() {
    return (
      <header role="banner" id="main-header">
        <section className="head-container maxwidth-wrap">
          <img src={logo} id="logo" alt="budget-logo"/>
          <h1>C&J Budget Tracker</h1>
        </section>
      </header>
     
    );
  }
}