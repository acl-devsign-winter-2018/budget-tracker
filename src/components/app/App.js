import React, { Component } from 'react';
import Categories from '../categories/Categories';
import './App.css';
import '../../styles/reset.css';
import '../../styles/main.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
  
  render() {
    return (
+      <Router>
+        <div className="app"> 
+          <Header/>
+          <main role="main" id="main">
+            <Switch>
+              <Route exact path="/" component={Categories}/>
+              <Redirect to="/"/>
+              <p>main content</p>
+            </Switch>
+          </main>
+      
+          <footer role="contentInfo" id="footer">
+            <p>(c) C&J Budget Tracking </p>
+          </footer>
+        </div>
+      </Router>
    );
  }
  
}