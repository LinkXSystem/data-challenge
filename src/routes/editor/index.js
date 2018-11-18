import React, { Component } from 'react';
import styles from './index.module.scss';
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <div className={styles.editor}>
          <div className={styles.toolbar}>
            <div>
              <i className="linksystem icon-plussquareo" />
              <i className="linksystem icon-link" />
            </div>
            <div>
              <i className="linksystem icon-cloudo" />
            </div>
          </div>
          <textarea name="inspiration" />
        </div>
      </section>
    );
  }
}
