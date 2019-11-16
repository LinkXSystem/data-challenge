import React, { Component } from 'react';

import styles from './footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className={styles.container}>
      <div>
        <span>© {year} Blog, Inc.</span>
      </div>
    </section>
  );
}
