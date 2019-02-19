import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import QRCode from '@/components/qrcode';
import Modal from '@/components/modal';
import Icon from '@/components/icon';

import styles from './enjoy.module.scss';

export default class ArticleEnjoy extends Component {
  render() {
    return (
      <Fragment>
        <QRCode content={'complex star'} width='75px' />
        <Modal isVisible={false}>
          <div className={styles.modal}>
            <QRCode content={'complex star'} />
            <div>
              <ul className={styles.icons}>
                <li>
                  <Icon name='icon-copy1' />
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

ArticleEnjoy.propTypes = {
  content: PropTypes.string.isRequired,
};
