// react 模块
import React from 'react';
import ReactDOM from 'react-dom';
// scss 模块
import './assets/scss/reset.scss';
import './assets/scss/chart.scss';

// iconfont 模块
import './assets/font/iconfont.css';

// react 组件
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
