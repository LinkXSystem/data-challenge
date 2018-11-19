import React, { Component } from 'react';
import Header from './models/header';
import Footer from './models/footer';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import {
  Main,
  Article,
  ArticleDetail,
  Column,
  ColumnDetail,
  Editor,
} from './routes';

import styles from './app.module.scss';

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

  github() {
    window.location.href =
      'https://github.com/LinkXSystem/visualization-system';
  }

  render() {
    const { routers, marker } = this.state;
    const HeaderRouter = withRouter(Header);
    return (
      <section className="container">
        <BrowserRouter>
          <React.Fragment>
            <HeaderRouter routers={routers} marker={marker} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/editor" component={Editor} />
              <Route path="/article/:uuid/detail" component={ArticleDetail} />
              <Route path="/article" component={Article} />
              <Route path="/column/:uuid/detail" component={ColumnDetail} />
              <Route path="/column" component={Column} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </section>
    );
  }
}
