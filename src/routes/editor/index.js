import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <div>
          <ul>
            <li>
              <i className="anticon icon-stepforward" />
            </li>
          </ul>
        </div>
        <textarea name="inspiration" />
      </section>
    );
  }
}
