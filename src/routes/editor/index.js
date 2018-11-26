import React, { Component } from 'react';

import Upload from '../../components/upload';

import styles from './index.module.scss';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.store = this.store.bind(this);
  }

  store(event) {
    if (!event.target.value) {
      return;
    }

    this.setState({
      content: event.target.value,
    });
  }

  upload() {}

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.editor}>
          <div className={styles.toolbar}>
            <div>
              <Upload>
                <i className="linksystem icon-plussquareo" />
              </Upload>
              <i className="linksystem icon-link" />
            </div>
            <div>
              <i className="linksystem icon-cloudo" />
            </div>
          </div>
          <textarea name="inspiration" onChange={this.store} />
        </div>
      </section>
    );
  }
}
