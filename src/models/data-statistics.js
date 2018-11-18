import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Chart, Axis, Bar, Tooltip, Legend } from 'viser-react';

export default class DataStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handlerTooltip(title, words) {
    return {
      title,
      words,
    };
  }

  render() {
    const { data } = this.props;
    const { template, scale } = this.state;

    return (
      <section className="container">
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
              (title, words) => this.handlerTooltip(title, words),
            ]}
            size={1}
            color="#00c49f"
          />
        </Chart>
      </section>
    );
  }
}

DataStatistics.propTypes = {
  data: PropTypes.array.isRequired,
};
