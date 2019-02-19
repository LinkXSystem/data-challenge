import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

export default class Modal extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { children } = this.props;
    return (
      <div className='skeleton-modal'>
        <div className='skeleton-modal_background' />
        <div className='skeleton-modal_content'>{children}</div>
      </div>
    );
  }
}

Modal.defaultProps = {
  isVisible: false,
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
