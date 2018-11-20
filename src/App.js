import React, { Component } from 'react';
import Header from './models/header';
import Footer from './models/footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

  router(location) {
    const { routers, marker } = this.state;
    const HeaderRouter = withRouter(Header);

    return (
      <React.Fragment>
        <HeaderRouter routers={routers} marker={marker} />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/editor" component={Editor} />
              <Route path="/article/:uuid/detail" component={ArticleDetail} />
              <Route path="/article" component={Article} />
              <Route path="/column/:uuid/detail" component={ColumnDetail} />
              <Route path="/column" component={Column} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </React.Fragment>
    );
  }

  render() {
    return (
      <section className="container">
        <BrowserRouter>
          <Route render={({ location }) => this.router(location)} />
        </BrowserRouter>
      </section>
    );
  }
}
