import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './component.scss';

export default class TabPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <div className="alex-tabs_content_item">{children}</div>;
  }
}

TabPane.propTypes = {
  tab: PropTypes.string.isRequired,
};
