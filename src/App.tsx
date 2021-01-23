import React from 'react';
import './App.css';
import Main from './components/Main';
import { Route,  Switch } from 'react-router-dom'
import Settings from './components/Settings';


const App = () => {
  return (
    <div className="container">
      
            <Switch>
              <Route exact path="/SmartHome/"  component={Main} />
              <Route exact path="/SmartHome/settings/:id" component={Settings} />
            </Switch>
      
      
    </div>
  );
}

export default App;
