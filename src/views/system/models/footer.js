import React, { Component } from 'react';

import styles from './footer.module.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.container}>
        <div>
          <span>© 2018 Blog, Inc.</span>
          <ul>
            <li />
          </ul>
        </div>
        <img src={require('@/assets/images/logo.svg')} alt="" />
        <div>
          <ul>
            <li />
          </ul>
        </div>
      </section>
    );
  }
}
