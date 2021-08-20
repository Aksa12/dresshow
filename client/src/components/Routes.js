import React, {Component} from 'react';
import Home from './Home.js';
import Graph from './Graph.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';
import Notfound from './Notfound.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Routes extends Component {
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return (
      
      <Router>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/home" component={Home} />
            <Route exact path = "/graph" component={Graph} />
            <Route exact path = "/contact" component={Contact} />
            <Route path ="*" component={Notfound} />
          </Switch>
      </Router>
     
  );
  }
  
}

export default Routes;