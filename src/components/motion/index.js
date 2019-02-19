import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Motion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'static',
      },
    };

    this.container = React.createRef();
  }

  componentDidMount() {}

  handlerMouseDown(event) {
    this.setState({
      style: {
        position: '',
      },
    });
  }

  handlerMouseUp(event) {
    this.setState({
      style: {
        position: '',
      },
    });
  }

  handlerMouseLeave(event) {
    this.setState({
      style: {
        position: '',
      },
    });
  }

  handlerMouseMove(event) {
    this.setState({
      style: {
        position: '',
      },
    });
  }

  render() {
    const { style } = this.state;
    return (
      <section
        ref={this.container}
        style={style}
        onMouseDown={this.handlerMouseDown}
        onMouseUp={() => {}}
        onMouseLeave={() => {}}
        onMouseMove={() => {}}
      />
    );
  }
}

Motion.propTypes = {
  position: PropTypes.object,
};
