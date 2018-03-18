import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Categories from './budget/Categories';
import './App.css';
import { Signin, Signup } from './auth/User';
import PrivateRoute from './auth/PrivateRoute';
import Home from './home/Home';
import Header from './header/Header';

export default class App extends PureComponent {

  
  render() {
    

    return (
      <div className="app">
      
        <Router>
          <Fragment>
            

            <Header/>

            <main role="main" id="main">
              <section className="main-container maxwidth-wrap">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <PrivateRoute exact path="/dashboard" component={Categories}/>
                  <Route exact path="/auth/signin" component={Signin}/>
                  <Route exact path="/auth/signup" component={Signup}/>
                  <Redirect to="/"/>
                </Switch>
              </section>
            </main>

          </Fragment>
        </Router>


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

