import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: 'Linksystem & Blog 创作思路',
          author: 'zhi',
          words: 1024,
          date: '2018年10月20日',
          background:
            'http://img.hb.aicdn.com/4f117f3ce2f97e20c311653ff61311e5beaf98e87f54a-RTazIh_fw658',
          paragraph:
            '基于React Router的web应用，根组件应该是一个router组件（BrowserRouter，HashRouter）。 项目中，react-router-dom提供了和两种路由。两种路由都会创建一个history对象。如果我们的应用有服务器响应web的请求，我们通常使用<BrowserRouter>组件; 如果使用静态文件服务器，则我们应该使用<HashRouter>组件',
        },
        {
          title: 'Linksystem & Blog 创作思路',
          author: 'zhi',
          words: 1024,
          date: '2018年10月20日',
          paragraph:
            '基于React Router的web应用，根组件应该是一个router组件（BrowserRouter，HashRouter）。 项目中，react-router-dom提供了和两种路由。两种路由都会创建一个history对象。如果我们的应用有服务器响应web的请求，我们通常使用<BrowserRouter>组件; 如果使用静态文件服务器，则我们应该使用<HashRouter>组件',
        },
        {
          title: 'Linksystem & Blog 创作思路',
          author: 'zhi',
          words: 1024,
          date: '2018年10月20日',
          background:
            'http://img.hb.aicdn.com/4f117f3ce2f97e20c311653ff61311e5beaf98e87f54a-RTazIh_fw658',
          paragraph:
            '基于React Router的web应用，根组件应该是一个router组件（BrowserRouter，HashRouter）。 项目中，react-router-dom提供了和两种路由。两种路由都会创建一个history对象。如果我们的应用有服务器响应web的请求，我们通常使用<BrowserRouter>组件; 如果使用静态文件服务器，则我们应该使用<HashRouter>组件',
        },
      ],
    };

    this.list = this.list.bind(this);
  }

  list() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        {articles.map((item, i) => (
          <div key={i} className={styles.article}>
            <div>
              {!item.background || <img src={item.background} alt='' />}
            </div>
            <article>
              <NavLink to='/article/xxxx'>
                <h3>{item.title}</h3>
              </NavLink>
              <ul>
                <li>{item.author}</li>
                <li>{item.time}</li>
              </ul>
              <p>{item.paragraph}</p>
            </article>
          </div>
        ))}
      </React.Fragment>
    );
  }

  render() {
    return <section className={styles.container}>{this.list()}</section>;
  }
}
