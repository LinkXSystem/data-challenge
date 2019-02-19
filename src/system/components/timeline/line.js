import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

Timeline.propTypes = {};
