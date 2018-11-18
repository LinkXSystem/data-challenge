import React, { Component } from 'react';
import Header from './models/header';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import { Main, Article, Column } from './routes';

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
        {
          label: 'Article',
          icon: '',
          href: '/article',
        },
        {
          label: 'Column',
          icon: '',
          href: '/column',
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
              <Route path="/article" component={Article} />
              <Route path="/column" component={Column} />
            </div>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}
