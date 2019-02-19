import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Markdown from '@/components/markdown';

import styles from './preview.module.scss';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };

    this.handlerStatus = this.handlerStatus.bind(this);
  }

  handlerStatus() {
    const { status } = this.state;

    this.setState({
      status: !status,
    });
  }

  render() {
    const { children, article } = this.props;
    const { status } = this.state;

    return (
      <section className={styles.container}>
        <div onClick={this.handlerStatus}>{children}</div>
        {status ? (
          <div className={styles.markdown}>
            <Markdown html={article.content} />
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }
}

Preview.defaultProps = {
  article: {
    content: '### Linksystem & Blog',
  },
};

Preview.propTypes = {
  article: PropTypes.object,
};
