import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Switch } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <React.Fragment>
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

          </Switch>
        )}
      />
    </React.Fragment>
  );
}

export default App;
