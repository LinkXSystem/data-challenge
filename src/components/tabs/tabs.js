import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './component.scss';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    let index = 0;

    if ('index' in this.props) {
      index = this.props.index;
    }

    this.state = {
      index,
    };

    this.renderTabs = this.renderTabs.bind(this);
  }

  handlerTabActive(index) {
    this.setState({
      index,
    });
  }

  renderTabs() {
    const { children } = this.props;
    const { index } = this.state;

    let cache = [];
    React.Children.forEach(children, (child, i) => {
      cache.push(
        <div
          className={i === index ? 'active' : ''}
          onClick={() => {
            this.handlerTabActive(i);
          }}
        >
          {child.props.tab}
        </div>,
      );
    });
    return <div className="alex-tabs_header">{cache}</div>;
  }

  render() {
    const { children } = this.props;
    const { index } = this.state;

    return (
      <section className="alex-tabs">
        {this.renderTabs()}
        <div
          className="alex-tabs_content"
          style={{
            transform: `translate(-${index * 100}%)`,
          }}
        >
          {children}
        </div>
      </section>
    );
  }
}

Tabs.defaultProps = {
  index: 0,
};

Tabs.propTypes = {
  index: PropTypes.number,
  onChange: PropTypes.func,
};
