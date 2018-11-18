import React, { Component } from 'react';

import styles from './main.module.scss';

import DataStatistics from '../models/data-statistics';
import Markdown from '../components/markdown';
import Qrcode from '../components/qrcode';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Linksystem & Blog 创作思路',
          author: 'zhi',
          words: 1024,
          date: '2018年10月20日',
        },
        {
          title: 'Linksystem & Blog 部署方案',
          author: 'zhi',
          words: 2048,
          date: '2018年10月25日',
        },
        {
          title: 'Linksystem & Blog 更新计划',
          author: 'zhi',
          words: 512,
          date: '2018年10月30日',
        },
      ],
      html: '> G2 数据可视化项目',
    };
  }

  componentDidMount() {}

  render() {
    const { data, html } = this.state;

    return (
      <section className={styles.container}>
        <DataStatistics data={data} />
        <div className={styles.recommendation}>
          <div className={styles.header}>
            <div>
              <h3>Linksystem & Blog 创作思路</h3>
              <ul>
                <li>zhi</li>
                <li>2018/10/20</li>
              </ul>
            </div>
            <Qrcode content={'complex star'} />
          </div>
          <div className={styles.content}>
            <Markdown html={html} />
          </div>
        </div>
      </section>
    );
  }
}
