import React from 'react';
import PropTypes from 'prop-types';

import classes from '@/lib/classes';

import './style/index.scss';

export default function Icon({ name }) {
  return <i className={classes(['skeleton-icon', 'linksystem', name])} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
