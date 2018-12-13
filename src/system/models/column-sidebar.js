import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { DraggableCore } from '../components/draggable';

import styles from './column-sidebar.module.scss';

function Article(props) {
  const { title, author, date, description } = props.article;

  return (
    <div className={styles.article}>
      <h4>{title}</h4>
      <p>
        <span>{author}</span>
        <span>{date}</span>
      </p>
      <p>{description}</p>
    </div>
  );
}

export default class ColumnSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.list = this.list.bind(this);
    this.handlerDragStart = this.handlerDragStart.bind(this);
  }

  handlerDrag(event) {
    console.log('====================================');
    console.log(event.dataTransfer.getData('id'));
    console.log('====================================');
  }

  handlerDragStart(event, dom) {
    // event.dataTransfer.setData('id', event);
    console.log('====================================');
    console.log(dom);
    console.log('====================================');
  }

  list() {
    const { sources } = this.props;

    return (
      <Fragment>
        {sources.map((item, i) => (
          <DraggableCore key={i} onDragStart={this.handlerDragStart}>
            <Article article={item} />
          </DraggableCore>
        ))}
      </Fragment>
    );
  }

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.search}>
          <input type="text" />
          <i className="linksystem icon-search1" />
        </div>
        <div
          onDragOver={event => event.preventDefault()}
          onDrag={this.handlerDrag}
          className={styles.articles}
        >
          {this.list()}
        </div>
      </section>
    );
  }
}

ColumnSidebar.propTypes = {
  sources: PropTypes.array.isRequired,
};
