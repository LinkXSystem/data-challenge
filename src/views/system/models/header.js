import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: false,
    };

    this.router = this.router.bind(this);
    this.marker = this.marker.bind(this);
  }

  static getDerivedStateFromProps(next) {
    const { location } = next;

    if (location.pathname !== '/') {
      return null;
    }

    return next;
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

    return <img src={marker} alt='' />;
  }

  render() {
    const { children, location } = this.props;
    const status = location.pathname === '/';

    return (
      <section
        className={styles.container}
        style={{
          overflow: status ? 'inherit' : 'hidden',
          boxShadow: status ? 'inherit' : '0px 0px 3px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
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
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
