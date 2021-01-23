import React from 'react';
import './App.css';
import Main from './components/Main';
import { Route,  Switch } from 'react-router-dom'
import Settings from './components/Settings';


const App = () => {
  
  return (
    <div className="App">
      <div className="container"> 
              <div><h3>Hi user</h3></div>
              <div><h5>Welcome Home ! </h5></div>
              <Switch>
          <Route  path="/" exact component={Main} />
          <Route exact path="/settings/:id" component={Settings} />
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
