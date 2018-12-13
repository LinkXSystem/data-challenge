import React, { Component } from 'react';
import styles from './column.module.scss';

import ColumnSidebar from '../../models/column-sidebar';

export default class ColumnEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          title: 'Linksystem & Blog 博客系统设计',
          author: 'zhi',
          date: '2018.12.12',
          description: 'Linksystem & Blog 博客系统设计',
        },
      ],
    };
  }

  onMouseMove(event) {
    console.log('====================================');
    console.log('x', event.dataTransfer);
    console.log('====================================');
  }

  handlerDrag(event) {
    console.log('====================================');
    console.log(event.dataTransfer);
    console.log('====================================');
  }

  render() {
    const { articles } = this.state;
    return (
      <section className="container">
        <div
          className={styles.screen}
          onDragOver={event => event.preventDefault()}
          onDrag={this.handlerDrag}
        />
        <ColumnSidebar sources={articles} />
      </section>
    );
  }
}
