import React, { Component } from 'react';
import Header from './components/layout/header';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import { Main } from './routes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      routers: [
        {
          label: 'Data Visualization',
          icon: '',
          href: '/',
        },
      ],
      marker: logo,
    };
  }

  render() {
    const { routers, marker } = this.state;

    return (
      <section className="container">
        <BrowserRouter>
          <div>
            <Header routers={routers} marker={marker} />
            <div>
              <Route exact path="/" component={Main} />
            </div>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}
