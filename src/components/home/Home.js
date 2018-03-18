import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import GoogleAuth from '../auth/GoogleAuth';

export default class Home extends PureComponent {

  render() {

    return (
      <div className="home">
        <div className="home-text">
          <h2>Welcome to Budget Tracker</h2>
          <p>
            <Link to="/auth/signin">Sign In</Link> &nbsp;&nbsp;
            <Link to="/auth/signup">Sign Up</Link>
          </p>
          <GoogleAuth/>
        </div>
      </div>
    );
  }
}