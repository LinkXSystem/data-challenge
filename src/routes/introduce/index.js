import React, { Component } from 'react';

import styles from './index.module.scss';

export default class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'https://avatars3.githubusercontent.com/u/26039188?s=460&v=4',
      name: 'ZHI',
      introduce:
        '留给自己一个希望，也留下一点绝望，人生中总不会因此而无聊，大抵应该波澜不惊，但终能航行到梦的彼岸',
    };
  }

  render() {
    const { avatar, name, introduce } = this.state;

    return (
      <section className={styles.container}>
        <div className={styles.user}>
          <img src={avatar} alt="" />
          <span>{name}</span>
        </div>
        <div className={styles.introduce}>
          <p>{introduce}</p>
        </div>
        <div className={styles.account}>
          <i className="linksystem icon-github" />
          <i className="linksystem icon-wechat" />
        </div>
        <div className={styles.footer}>
          <p>
            <span>© 2018 Blog, Inc.</span>
            <span> ZHI </span>
            <span>Theme © </span>
            <span>Linksystem</span>
          </p>
        </div>
      </section>
    );
  }
}
