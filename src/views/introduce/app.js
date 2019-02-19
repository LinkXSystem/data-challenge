import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import User from './routes/user';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/introduce">
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
