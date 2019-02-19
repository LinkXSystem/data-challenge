import React, { PureComponent } from 'react';
import _ from 'qrcode';

import PropTypes from 'prop-types';

export default class QRCode extends PureComponent {
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
    return (
      <img
        src={this.state.image}
        alt='code'
        style={{
          width: this.props.width,
        }}
      />
    );
  }
}

QRCode.defaultProps = {
  config: {
    margin: 2,
    scale: 4,
    width: 360,
    color: {
      dark: '#000000ff',
      light: '#ffffffff',
    },
  },
};

QRCode.defaultProps = {
  width: '240px',
};

QRCode.propTypes = {
  content: PropTypes.string.isRequired,
  config: PropTypes.object,
  width: PropTypes.string,
};
