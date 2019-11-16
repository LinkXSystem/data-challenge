import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

export default class Modal extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { children, visible } = this.props;
    return (
      <div
        className='skeleton-modal'
        style={{
          visibility: visible ? 'visible' : 'hidden',
        }}
      >
        <div className='skeleton-modal_background' />
        <div className='skeleton-modal_content'>{children}</div>
      </div>
    );
  }
}
