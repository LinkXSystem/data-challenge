import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './label-input.module.scss';

export default class LabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      value: '',
    };

    this.label = this.label.bind(this);
    this.cache = this.cache.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  label() {
    const { labels } = this.state;
    return labels.length ? (
      <ul className={styles.label}>
        {labels.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
            <span>x</span>
          </li>
        ))}
      </ul>
    ) : (
      ''
    );
  }

  cache(event) {
    if (![13, 8].includes(event.keyCode)) return false;

    const label = event.target.value;
    const { labels } = this.state;

    if (!label) {
      labels.pop();

      this.setState({
        labels: labels,
      });

      return;
    }

    this.setState({
      labels: labels.concat(label),
      value: '',
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section className={styles.container}>
        {this.label()}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.cache}
        />
      </section>
    );
  }
}

LabelInput.propTypes = {};
