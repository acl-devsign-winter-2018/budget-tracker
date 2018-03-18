import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { listenForUser, logout } from '../auth/actions';


class Header extends Component {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() { 
    const { user, logout } = this.props;
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <h1 className="logo">Budget Tracker</h1>
          <nav>
            {user && <p>Hello, {user.name}</p>}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/item">Item</Link></li>
              { user 
                ? 
                <div>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/" onClick={logout}>Log out</Link></li>
                </div>
                : 
                <div>
                  <li><Link to="/auth/signin">Sign In</Link></li>
                  <li><Link to="/auth/signup">Sign Up</Link></li>
                </div>
              }
            </ul>
          </nav>
        </section> 
      </header>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { listenForUser, logout }
)(Header);