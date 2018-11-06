import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import styles from './markdown.scss';

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
  }

  render() {
    const { html } = this.props;

    return (
      <section
        className="styles.container"
        dangerouslySetInnerHTML={{ __html: marked(html) }}
      />
    );
  }
}

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
};
