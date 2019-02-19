import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DraggableCore extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  render() {
    const { children, onDragStart } = this.props;

    return (
      <div
        ref={this.container}
        draggable
        onDragStart={event => onDragStart(event, this.container)}
      >
        {children}
      </div>
    );
  }
}

DraggableCore.propTypes = {
  onDragStart: PropTypes.func,
};
