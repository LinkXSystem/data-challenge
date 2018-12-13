import React, { Component } from 'react';

// 通用组件
import Upload from '../../components/upload';
// 业务组件
import Preview from '../../models/preview';
import LabelInput from '../../models/label-input';
import CloudSidebar from '../../models/cloud-sidebar';

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
        <div className={styles.header}>
          <input type="text" placeholder="请输入文章标题" />
        </div>
        <div className={styles.topics}>
          {/* <input type="text" placeholder="请输入文章标题" /> */}
          <div>
            <span>Topics</span>
            <i className="linksystem icon-questioncircleo" />
          </div>
          <LabelInput />
        </div>
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
        <Preview>
          <i className="linksystem icon-filetext1" />
        </Preview>
        <CloudSidebar />
      </section>
    );
  }
}
