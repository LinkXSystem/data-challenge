import React, { Component } from 'react';
import Header from './models/header';
import Footer from './models/footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import logo from '@/assets/images/logo.svg';
import {
  Main,
  Article,
  ArticleDetail,
  Column,
  ColumnDetail,
  ArticleEditor,
  ColumnEditor,
  Emotion,
  User,
  UserConfigure,
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
        {
          label: 'Emotion',
          icon: '',
          href: '/emotion',
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
        <HeaderRouter routers={routers} marker={marker}>
          <div className={styles.search}>
            {/* <label>
              <i className='linksystem icon-search1' />
              <input type='text' />
            </label> */}
            <i className='linksystem icon-github' />
          </div>
        </HeaderRouter>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={300}>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/article/:uuid' component={ArticleDetail} />
              <Route path='/article' component={Article} />
              <Route path='/column/:uuid' component={ColumnDetail} />
              <Route path='/column' component={Column} />
              <Route path='/editor/article' component={ArticleEditor} />
              <Route path='/editor/column' component={ColumnEditor} />
              <Route path='/emotion' component={Emotion} />
              <Route path='/user' component={User} />
              <Route path='/user/configure' component={UserConfigure} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </React.Fragment>
    );
  }

  render() {
    return (
      <section className='container'>
        <BrowserRouter basename='/system'>
          <Route render={({ location }) => this.router(location)} />
        </BrowserRouter>
      </section>
    );
  }
}
