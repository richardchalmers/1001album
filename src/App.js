import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
    <div className = "Form">
    <h1> Login </h1>
    <input type="email" placeholder="Email"/><br/>
    <input type="password" placeholder="Password" />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    </div>
  );
};

export default App;
