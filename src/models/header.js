import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.router = this.router.bind(this);
    this.marker = this.marker.bind(this);
  }

  router() {
    const { routers } = this.props;

    return (
      <div>
        {routers.map((item, i) => (
          <NavLink
            key={i}
            to={item.href}
            activeClassName={styles.active}
            exact={true}
          >
            {item.icon ? <img src={item.icon} alt="icon's bitmap" /> : ''}
            {String.prototype.toLocaleUpperCase.apply(item.label)}
          </NavLink>
        ))}
      </div>
    );
  }

  marker() {
    const { marker } = this.props;

    return <img src={marker} alt="" />;
  }

  render() {
    const { children } = this.props;

    return (
      <section className={styles.container}>
        <div className={styles.navbar}>
          {this.marker()}
          {this.router()}
        </div>
        {children}
      </section>
    );
  }
}

Header.propTypes = {
  routers: PropTypes.array.isRequired,
  marker: PropTypes.string.isRequired,
};
