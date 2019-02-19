import React, { Component } from 'react';

import styles from './index.module.scss';

export default function withCanvas(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        context: null,
        origin: {
          x: 0,
          y: 0,
        },
      };

      this.canvas = React.createRef();

      this.initial = this.initial.bind(this);
    }

    componentWillMount() {
      window.onresize = () => {
        this.initial();
      };
    }

    componentDidMount() {
      this.initial();
    }

    initial() {
      const { innerWidth, innerHeight } = window;
      this.canvas.current.width = innerWidth;
      this.canvas.current.height = innerHeight;

      const { offsetLeft, offsetTop } = this.canvas.current;
      const context = this.canvas.current.getContext('2d');

      this.setState({
        context: context,
        origin: {
          x: offsetLeft,
          y: offsetTop,
        },
      });
    }

    render() {
      const { context, origin } = this.state;

      return (
        <section className={styles.container}>
          <canvas ref={this.canvas} />
          <WrappedComponent context={context} origin={origin} {...this.props} />
        </section>
      );
    }
  };
}
