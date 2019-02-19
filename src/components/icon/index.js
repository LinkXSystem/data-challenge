import React from 'react';

import classes from '../../lib/classes';

export default ({ name }) => {
  return <i className={classes(['linksystem', name])} />;
};
