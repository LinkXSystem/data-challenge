import React, { Component } from 'react';

import { Tabs, TabPane } from '@/components/tabs';

import styles from './index.module.scss';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <div
              style={{
                backgroundImage:
                  'url(http://img.hb.aicdn.com/11d1d6b96a00fa9b93d6e341a595dba4077788d2395b4-AaYCHt)',
              }}
            />
            <div>
              <p>
                <span>ZHI</span>
              </p>
              <p>
                <span>志，你希望别人决定你的未来吗？</span>
              </p>
            </div>
            <i className="linksystem icon-export" />
          </div>
        </div>
        <div className={styles.content}>
          <Tabs>
            <TabPane tab="文章">
              <div className={styles.panel}>文章</div>
            </TabPane>
            <TabPane tab="专栏">
              <div className={styles.panel}>专栏</div>
            </TabPane>
            <TabPane tab="项目">
              <div className={styles.panel}>项目</div>
            </TabPane>
          </Tabs>
        </div>
      </section>
    );
  }
}
