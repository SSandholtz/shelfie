import React, { Component } from 'react';
import {HashRouter as Route, Link, Switch } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Form from './Components/Form/Form.jsx'
import './App.css';

class App extends Component {
  constructor () {
    super ()

    this.state = {

    }
  }
  render() {
    return (
      <Route>
      <nav>
        <li><Link  to='/' > Dashboard </Link></li>
        <li><Link  to='/admin'> Admin </Link></li>
      </nav>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/admin' component={Form} />
      </Switch>

      </Route>
    );
  }
}

export default App;
