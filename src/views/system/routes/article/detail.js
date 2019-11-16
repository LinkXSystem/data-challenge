import React, { Component } from 'react';

// import Markdown from '../../components/markdown';
import QRCode from '@/components/qrcode';

import styles from './detail.module.scss';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  render() {
    const { article } = this.state;

    return (
      <section className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <div>
              <h3>Linksystem & Blog 创作思路</h3>
              {/* <ul>
                <li>zhi</li>
                <li>2018/10/20</li>
              </ul> */}
            </div>
            <QRCode content={'complex star'} width={120} />
          </header>
          <div className={styles.feature} />
          <div className={styles.content}>
            {/* <Markdown html={article.html} /> */}
          </div>
        </article>
      </section>
    );
  }
}
