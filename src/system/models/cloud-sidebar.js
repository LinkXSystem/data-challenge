import React, { Component } from 'react';

import styles from './cloud-sidebar.module.scss';

export default class Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.search}>
          <input type="text" />
          <i className="linksystem icon-search1" />
        </div>
        <div />
      </section>
    );
  }
}
