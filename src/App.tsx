import React from 'react';
import './App.css';
import Main from './components/Main';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Settings from './components/Settings';
import {history} from './history';

const App = () => {
  
  return (
    <div className="App">
      <div className="container"> 
              <div><h3>Hi user</h3></div>
              <div><h5>Welcome Home ! </h5></div>
              <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/settings/:id" component={Settings} />
        </Switch>
      </div>
    </Router>
      </div>
      
    </div>
  );
}

export default App;
