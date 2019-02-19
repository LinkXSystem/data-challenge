import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.upload = this.upload.bind(this);
  }

  upload() {
    this.refs.file.click();
  }

  handle(event) {
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  }

  render() {
    const { children } = this.props;

    return (
      <label className={styles.container} onChange={this.upload}>
        <input type="file" ref="file" onChange={this.upload} />
        {children}
      </label>
    );
  }
}

Upload.defaultProps = {
  compress: false,
  threshold: 50,
};

Upload.propTypes = {
  compress: PropTypes.bool,
  header: PropTypes.object,
  data: PropTypes.object,
  threshold: PropTypes.number,
};
