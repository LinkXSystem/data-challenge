import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
      <ul>
        {routers.map(item => (
          <li key={item.href}>
            {item.icon ? <img src={item.icon} alt="icon's bitmap" /> : ''}
            <Link to={item.href}>
              {String.prototype.toLocaleUpperCase.apply(item.label)}
            </Link>
          </li>
        ))}
      </ul>
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
