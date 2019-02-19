import React, { Component } from 'react';

import { Timeline, TimelineItem } from '@/components/timeline';
import Icon from '@/components/icon';

import styles from './index.module.scss';

export default class Emotion extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className='container'>
        <div>
          <Timeline>
            <TimelineItem icon={<Icon name='ant-design' />}>
              <div className={styles.twitter}>
                喜欢上她也许是个意外呢。我到现在也还是这样认为的，喜欢她，估计是命运的安排，一场意外的。时常，我想起以前的自己，那是时候的我追逐技术，自己喜欢的，容不下别人的错误，不喜欢和人随意讨论一些是非。但是今天，我却选择在容忍和劝告，喜欢着她的笑容，明白现在的自己也许真的因为她改变了。在坚持自己道路的同时，也在想如何能更好的接近她。尽管我的内心在提醒我，其实这条路不是我当初选择的。受她的影响，我已经慢慢的开始学习她优秀的地方，尝试在交流中去理解她的想法，祈愿她能这样一直笑着，始终是那样的幸福。
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    );
  }
}
