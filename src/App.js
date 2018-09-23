import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
