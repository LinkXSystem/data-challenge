import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';

import { Chart, Axis, Bar, Tooltip, Legend } from 'viser-react';
import DataSet from '@antv/data-set';

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Linksystem & Blog 创作思路',
          author: 'zhi',
          words: 1024,
          date: '2018年10月20日',
        },
        {
          title: 'Linksystem & Blog 部署方案',
          author: 'zhi',
          words: 2048,
          date: '2018年10月25日',
        },
        {
          title: 'Linksystem & Blog 更新计划',
          author: 'zhi',
          words: 512,
          date: '2018年10月30日',
        },
      ],
      scale: [
        {
          dataKey: 'words',
        },
      ],
      template: `
        <ul class="article-data-tooltip">
          <li>
            <span>文章：</span>
            <span>{title}</span>
          </li>
          <li>
            <span>词数：</span>
            <span>{words}</span>
          </li>
        </ul>
      `,
    };
  }

  async componentDidMount() {}

  tooltip(title, words) {
    return {
      title,
      words,
    };
  }

  render() {
    const { data, scale, template } = this.state;

    return (
      <section className={styles.container}>
        <Chart forceFit height={420} data={data} scale={scale} renderer="svg">
          <Tooltip
            itemTpl={template}
            showTitle={false}
            g2TooltipList={{ 'padding-inline-start': '0px' }}
          />
          <Legend />
          <Axis dataKey="words" show={false} />
          <Axis dataKey="date" label={{ textStyle: { fill: '#404040' } }} />
          <Bar
            position="date*words"
            tooltip={[
              'title*words',
              (title, words) => this.tooltip(title, words),
            ]}
            size={1}
            color="#00c49f"
          />
        </Chart>
      </section>
    );
  }
}

Template.propTypes = {};
