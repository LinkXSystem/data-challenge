import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ArticleModel extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handlerDraw = this.handlerDraw.bind(this);
  }

  componentDidUpdate() {
    const { context } = this.props;

    if (context) {
      this.handlerDraw();
    }
  }

  handlerDraw() {
    const { context } = this.props;

    context.fillColor = 'red';
    context.fillRect(10, 10, 100, 100);
  }

  render() {
    return <Fragment />;
  }
}

ArticleModel.propTypes = {
  context: PropTypes.object,
  origin: PropTypes.object,
};
