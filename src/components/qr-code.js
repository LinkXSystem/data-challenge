import React, { Component } from 'react';
import _ from 'qrcode';

import PropTypes from 'prop-types';

export default class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };

    this.draw = this.draw.bind(this);
  }

  draw() {
    const { content, config } = this.props;

    _.toDataURL(content, config, (error, image) => {
      this.setState({
        image,
      });
    });
  }

  componentWillMount() {
    this.draw();
  }

  render() {
    return <img src={this.state.image} alt="code" />;
  }
}

QRCode.defaultProps = {
  config: {
    margin: 2,
    scale: 4,
    width: 240,
    color: {
      dark: '#000000ff',
      light: '#ffffffff',
    },
  },
};

QRCode.propTypes = {
  content: PropTypes.string.isRequired,
  config: PropTypes.object,
};
