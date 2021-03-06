import styles from './NewFolderButton.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewFolder from '../NewFolder';
import { activateModal } from '../../store/actions/newFolder';

const cx = classNames.bind(styles);
const icon = (
  <svg height="448pt" viewBox="0 0 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
  </svg>
);

const NewFolderButton = ({ activateModal }) => {
  return (
    <button onClick={() => activateModal()} className={cx('NewFolderButton')}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('text')}>Add new folder</span>
    </button>
  );
};

NewFolderButton.propTypes = {};

NewFolderButton.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = { activateModal };

export default connect(mapStateToProps, mapDispatchToProps)(NewFolderButton);
