import React, { Component } from 'react';

// import withCanvas from '../../components/canvas';
// import ArticleModel from '../../models/article-model';

// import styles from './detail.module.scss';

export default class ColumnDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
    };

    this.canvas = React.createRef();

    this.handlerModel = this.handlerModel.bind(this);
    this.handlerDraw = this.handlerDraw.bind(this);
  }

  componentDidMount() {
    let context = this.canvas.current.getContext('2d');

    this.setState({
      context: context,
    });

    this.handlerDraw(context);
  }

  handlerModel() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="150">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <h4>Linksystem & Blog 创作思路</h4>
            <p>
              <span>ZHI</span>
              <span>2018.12.01</span>
            </p>
            <p
              style={{
                '-webkit-box-orient': 'vertical',
              }}
            >
              基于React
              Router的web应用，根组件应该是一个router组件（BrowserRouter，HashRouter）。
              项目中，react-router-dom提供了和两种路由。两种路由都会创建一个history对象。如果我们的应用有服务器响应web的请求，我们通常使用
              BrowserRouter 组件; 如果使用静态文件服务器，则我们应该使用
              HashRouter 组件
            </p>
          </div>
        </foreignObject>
      </svg>
    `;
  }

  handlerDraw(context) {
    context.lineJoin = 'round';
    context.moveTo(10, 10);

    context.save();
    context.shadowColor = '#000000';
    context.shadowBlur = 10;
    context.fillStyle = '#ffffff';
    context.fillRect(10, 10, 300, 150);

    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(10, 10);
    context.lineTo(10, 160);
    context.strokeStyle = '#b2b2b2';
    context.stroke();
    context.closePath();

    context.restore();
    context.font = '16px sans-serif';
    context.fillText('Linksystem & Blog 创作思路', 20, 28, 300);

    context.font = '14px sans-serif';
    context.fillText('ZHI 2018.12.1', 20, 52, 300);
    context.fillText(
      '基于React Router的web应用，根组件应该是一个router组件（BrowserRouter，HashRouter）。 ',
      20,
      76,
    );
  }

  render() {
    return (
      <section className="container">
        <canvas ref={this.canvas} width="500" height="500" />
      </section>
    );
  }
}
