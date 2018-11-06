import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './main.module.scss';

import DataStatistics from '../components/system/data-statistics';
import Markdown from '../components/universal/markdown';
import Qrcode from '../components/universal/qrcode';

export default class Template extends Component {
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
        <div className={styles.article}>
          <div className={styles.article.header}>
            <div>
              <h3>Linksystem & Blog 创作思路</h3>
              <ul>
                <li>zhi</li>
                <li>2018年10月20日</li>
              </ul>
            </div>
          </div>
          <div>
            <Markdown html={html} />
          </div>
        </div>
      </section>
    );
  }
}
