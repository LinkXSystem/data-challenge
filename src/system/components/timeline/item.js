import React from 'react';

export default ({ icon, line, children }) => {
  return (
    <div className='skeleton-time-line_item'>
      <div className='sidebar'>
        <div className='icon'>{icon}</div>
        <div className='line'>{line}</div>
      </div>
      <div className='content'>{children}</div>
    </div>
  );
};
