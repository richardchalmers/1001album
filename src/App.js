import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      {/*use switch as there will be many routes */}
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
