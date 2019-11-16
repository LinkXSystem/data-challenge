import React, { Component } from 'react';

import styles from './main.module.scss';

import Markdown from '@/components/markdown';
import { ArticleEnjoy } from '../models/article';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      html: '> G2 数据可视化项目',
    };
  }

  componentDidMount() {}

  render() {
    const { html } = this.state;

    return (
      <section className={styles.container}>
        {/* <DataStatistics data={data} /> */}
        <div className={styles.recommendation}>
          <div className={styles.header}>
            <div>
              <h3>Linksystem & Blog 创作思路</h3>
              <ul>
                <li>zhi</li>
                <li>2018/10/20</li>
              </ul>
            </div>
            <ArticleEnjoy content={'complex star'} />
          </div>
          <div className={styles.content}>
            <Markdown html={html} />
          </div>
        </div>
      </section>
    );
  }
}
